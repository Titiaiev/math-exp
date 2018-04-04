'use strict'

var calc = function () {
    //ответ: 837799
    var maxSequence = 0,
        currentSequence = 0,
        storedNumber = 2,
        currentNumber = 1e6; // 1000000

    function collatz(n) {
        var iter = 0;

        while (n !== 1) {
            (n % 2 === 0) ? (n = n / 2) : (n = n * 3 + 1);
            iter++
        }
        return (iter + 1);
    }

    while (currentNumber) {
        currentSequence = collatz(currentNumber);
        if (currentSequence > maxSequence) {
            maxSequence = currentSequence;
            storedNumber = currentNumber;
        }
        currentNumber--;
    }

    return storedNumber;
}

addEventListener('message', function () {

    postMessage({
        answer: calc(),
        code: calc.toString()
    });

})