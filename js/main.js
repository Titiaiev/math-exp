"use strict";
window.onload = function () {
    
    var problemsList = Array.from( document.querySelectorAll("#problems-list > li") );
    // добавить кнопки не пустым элементам списка
    problemsList.forEach( function (problem) {

        if (problem.childNodes.length > 0) {
            var btn = document.createElement("button");
            btn.innerText = "решить";
            problem.appendChild(btn);
        }
    })
        

    // повесить на кнопки события клика
    document.getElementById('problems-list').addEventListener('click', function (e) {

        if(e.target.nodeName === 'BUTTON') {
            calculateAndDisplayAnswer(e.target.parentNode, e.target.parentNode.getAttribute('data-id'));
            e.target.parentNode.removeChild(e.target);
        }

    }, true);



    // показать ответ и код
    function calculateAndDisplayAnswer(target, problemsNumber) {

        var worker = new Worker('js/workers/' + problemsNumber + '.js');
        var answerSection = document.createElement("p");
        var code = document.createElement("pre");
        var wraper = document.createElement('div');

        answerSection.classList.add('answer-section');
        code.classList.add('code-section');
        
        wraper.appendChild(answerSection);
        wraper.appendChild(code);

        worker.postMessage('');

        worker.onmessage = function (response) {

            answerSection.innerText = "Ответ: " + response.data.answer;
            code.innerHTML = response.data.code;
            target.appendChild(wraper);
        }

        worker.onerror = function () {
            wraper.innerHTML = '<p class="answer-section">файла с именем '+ problemsNumber +'.js не существует.</p>'
            target.appendChild(wraper);
        }
    }
}