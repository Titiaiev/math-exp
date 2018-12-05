

window.onload = function onloadHandler() {
  const problemsList = Array.from(document.querySelectorAll('#problems-list > li'));
  // добавить кнопки не пустым элементам списка
  problemsList.forEach((problem) => {
    if (problem.childNodes.length > 0) {
      const btn = document.createElement('button');
      btn.innerText = 'решить';
      problem.appendChild(btn);
    }
  });

  // показать ответ и код
  function calculateAndDisplayAnswer(target, problemsNumber) {
    const worker = new Worker(`js/workers/${problemsNumber}.js`);
    const answerSection = document.createElement('p');
    const code = document.createElement('pre');
    const wraper = document.createElement('div');

    answerSection.classList.add('answer-section');
    code.classList.add('code-section');

    wraper.appendChild(answerSection);
    wraper.appendChild(code);

    worker.postMessage('');

    worker.onmessage = function messageHandler(response) {
      answerSection.innerText = `Ответ: ${response.data.answer}`;
      code.innerHTML = response.data.code;
      target.appendChild(wraper);
    };

    worker.onerror = function errorHandler() {
      wraper.innerHTML = `<p class="answer-section">В файле ${problemsNumber}.js произошла ошибка.</p>`;
      target.appendChild(wraper);
    };
  }

  // повесить на кнопки события клика
  document.getElementById('problems-list').addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
      calculateAndDisplayAnswer(e.target.parentNode, e.target.parentNode.getAttribute('data-id'));
      e.target.parentNode.removeChild(e.target);
    }
  }, true);
};
