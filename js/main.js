class ProblemNode {
  constructor(data) {
    const { id, title, description } = data;
    const li = document.createElement('li');
    const h2 = document.createElement('h2');
    const descriptionParagraph = document.createElement('p');
    const button = document.createElement('button');
    const wraper = document.createElement('div');
    const buttonsContainer = document.createElement('div');
    const answerSection = document.createElement('p');

    answerSection.classList.add('notification', 'is-warning', 'column');

    h2.innerText = `#${id} ${title}`;
    descriptionParagraph.innerHTML = description;
    button.innerText = 'решить';
    button.classList.add('button', 'is-primary');
    wraper.classList.add('columns');

    const that = this;
    button.addEventListener('click', function clickHandler(e) {
      that.calculate();
      button.removeEventListener('click', clickHandler);
      button.addEventListener('click', () => {
        that.modal.classList.add('is-active');
      }, false);
    }, false);

    buttonsContainer.classList.add('column');
    buttonsContainer.appendChild(button);
    wraper.appendChild(buttonsContainer);
    li.appendChild(h2);
    li.appendChild(descriptionParagraph);
    li.appendChild(wraper);

    this.li = li;
    this.id = id;
    this.button = button;
    this.answerSection = answerSection;
    this.wraper = wraper;
    this.modal = null;
  }

  // eslint-disable-next-line class-methods-use-this
  createModal(content) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    modal.innerHTML = `
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <pre></pre>
      </section>
      <footer class="modal-card-foot">

      </footer>
    </div>`;

    const closeBtn = modal.querySelector('button.delete');
    const modalBG = modal.querySelector('.modal-background');
    const modalCardTitle = modal.querySelector('.modal-card-title');
    const pre = modal.querySelector('pre');
    const code = document.createElement('code');

    modalCardTitle.innerText = `Код можно найти в файле: js/workers/problem${this.id}.js`;

    code.innerHTML = content;
    if (hljs) {
      code.classList.add('javascript');
      hljs.highlightBlock(code);
    }
    pre.appendChild(code);

    closeBtn.onclick = () => {
      modal.classList.remove('is-active');
    };

    modalBG.onclick = () => {
      modal.classList.remove('is-active');
    };

    return modal;
  }

  calculate() {
    this.button.classList.add('is-loading');
    const worker = new Worker(`js/workers/problem${this.id}.js`);

    worker.postMessage('');
    worker.onmessage = this.answerHandle.bind(this);
    worker.onerror = this.errorHandle.bind(this);
  }

  answerHandle(response) {
    // console.log(this);
    this.button.classList.remove('is-loading');
    this.button.classList.remove('is-primary');
    this.button.classList.add('is-info');
    this.button.innerHTML = '<span class="icon"> <i class="fas fa-code"></i> </span> <span>Показать код</span>';
    this.answerSection.innerText = `Ответ: ${response.data.answer}`;
    if (response.data.check === true) {
      this.answerSection.classList.remove('is-warning');
      this.answerSection.classList.add('is-success');
      this.answerSection.innerText += ` / checked: ${response.data.check}`;
    } else if (response.data.check === false) {
      this.answerSection.classList.remove('is-warning');
      this.answerSection.classList.add('is-danger');
      this.answerSection.innerText += ` / checked: ${response.data.check}`;
    }
    this.wraper.appendChild(this.answerSection);

    this.modal = this.createModal(response.data.code);

    document.getElementById('modals').appendChild(this.modal);
  }

  errorHandle() {
    this.button.classList.remove('is-loading');
    this.button.classList.remove('is-success');
    this.button.classList.add('is-danger');
    this.button.innerHTML = '<span class="icon"> <i class="far fa-frown"></i> </span> <span>Ошибка!!!</span>';

    this.answerSection.classList.add('notification', 'is-danger', 'column');
    this.answerSection.innerText = `В файле problem${this.id}.js произошла ошибка.`;
    this.wraper.appendChild(this.answerSection);
  }
}


window.onload = function onloadHandler() {
  const ul = document.getElementById('problems-container');
  const tempWraper = document.createDocumentFragment();

  fetch('./problems_list/list.json')
    .then(res => res.json())
    .then((res) => {
      // console.log(res);
      res.forEach((problem) => {
        // console.log(problem);
        const problemNode = new ProblemNode(problem);
        tempWraper.appendChild(problemNode.li);
      });

      ul.appendChild(tempWraper);
    });
};
