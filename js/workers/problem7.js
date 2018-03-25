'use strict'

var calc = function() {
    // верный ответ 104743
    function isPrimeNumber(num) {
        var s = num;
        if (s % 2 === 0 && s !== 2) return false;
        // if (s > 30) s = Math.floor(Math.sqrt(s));
        for (let i = 2; i < s; i++) {
            if (num % i === 0) return false
        }
        return (num !== 1 || num === 2) ? true : false
    }

    var counter = 0,
        n = 0;
    for (let i = 1; counter < 10001; i++) {
        if (isPrimeNumber(i)) {
            n = i;
            ++counter;
            // console.log(n);
            // console.log(counter);
        }
    }

    return n;
}

addEventListener('message', function () {

    postMessage({
        answer: calc(),
        code: calc.toString()
    });

})