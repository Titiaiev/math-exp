"use strict";
window.onload = function () {

    // добавить кнопки не пустым элементам списка и повесить на них события клика
    var problemsList = document.querySelectorAll("#problems-list > li");
    for (var i = 0; i < problemsList.length; i++) {
        if (problemsList[i].childNodes.length > 0) {
            var btn = document.createElement("button");
            btn.innerText = "решить";
            problemsList[i].appendChild(btn);
        }
    }
    var btns = document.querySelectorAll('#problems-list button');
    for (var j = 0; j < btns.length; j++) {

        btns[j].addEventListener('click', function (e) {
            showAnswer(e.target.parentNode, e.target.parentNode.getAttribute('data-id')); console.log(e.target.parentNode.getAttribute('data-id'));
            e.target.parentNode.removeChild(e.target);
        });
    }



    // показать ответ и код
    function showAnswer(target, problemsNumber) {

        var worker = new Worker('js/workers/' + problemsNumber + '.js');

        worker.postMessage('');
        worker.onmessage = function (response) {

            var answerSection = document.createElement("p");
            answerSection.className += ' answer-section';
            answerSection.innerText = "Ответ: " + response.data.answer;
            target.appendChild(answerSection);

            var code = document.createElement("pre");
            code.className += ' code-section';
            code.innerHTML = response.data.code;
            target.appendChild(code);
        }

        worker.onerror = function () {
            console.log('файла с именем '+ problemsNumber +'.js не существует.');
        }
    }
}