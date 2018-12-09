
window.onload = function onloadHandler() {
  const problemsList = Array.from(document.querySelectorAll('#problems-list > li'));
  // добавить кнопки не пустым элементам списка
  problemsList.forEach((problem) => {
    if (problem.childNodes.length > 0) {
      const btn = document.createElement('button');
      btn.classList.add('button', 'is-primary');
      btn.innerText = 'решить';
      problem.appendChild(btn);
    }
  });

  // показать ответ и код
  function calculateAndDisplayAnswer(target, btn, problemsNumber) {
    btn.classList.add('is-loading');
    const worker = new Worker(`js/workers/${problemsNumber}.js`);
    const answerSection = document.createElement('p');
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    const wraper = document.createElement('div');

    answerSection.classList.add('notification', 'is-success');
    code.classList.add('javascript');

    wraper.appendChild(answerSection);
    pre.appendChild(code);
    wraper.appendChild(pre);

    worker.postMessage('');

    worker.onmessage = function messageHandler(response) {
      answerSection.innerText = `Ответ: ${response.data.answer}`;
      code.innerHTML = response.data.code;
      if (hljs) {
        // code.classList.add('javascript');
        hljs.highlightBlock(code);
      }

      btn.classList.remove('is-loading');
      target.removeChild(btn);
      target.appendChild(wraper);
    };

    worker.onerror = function errorHandler() {
      wraper.innerHTML = `<p class="answer-section">В файле ${problemsNumber}.js произошла ошибка.</p>`;
      target.appendChild(wraper);
      btn.classList.remove('is-loading');
      btn.innerHTML = `    <span class="icon">
      <i class="far fa-frown"></i>
    </span>
    <span>Ошибка!!!</span>`;
      btn.classList.remove('is-success');
      btn.classList.add('is-danger');
    };
  }

  // повесить на кнопки события клика
  document.getElementById('problems-list').addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
      calculateAndDisplayAnswer(e.target.parentNode, e.target, e.target.parentNode.getAttribute('data-id'));
    }
  }, false);
};
