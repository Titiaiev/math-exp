'use strict'

var calc = function() {
    var sum = 0,
            sumOfSqrts = 0;

        for (let i = 1; i <= 100; i++) {
            sum += i;
            sumOfSqrts += i * i;
        }
        return sum * sum - sumOfSqrts;
}

addEventListener('message', function () {

    postMessage({
        answer: calc(),
        code: calc.toString()
    });

})