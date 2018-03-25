'use strict'

var calc = function() {
    var sumOfnumbers = 0;
    for (var i = 3; i < 1000; i++) {
        // проверить является ли число кратным 3-м или 5-ти
        if (i % 3 === 0 || i % 5 === 0) {
            // если так то добавить его к сумме кратных чисел
            sumOfnumbers += i;
        }
    }
    return sumOfnumbers;
}

addEventListener('message', function () {

    postMessage({
        answer: calc(),
        code: calc.toString()
    });

})