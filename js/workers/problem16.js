'use strict'

var calc = function() {
    var answer = 'нет решения из-за низкой точности в операциях с большими числами';
        // var answer = 0;
        var numInPow = Math.pow(2, 1000);
        numInPow.toLocaleString().split('').forEach(function (value, index, arr) {
            answer += (+value)
        })
        // console.log(numInPow.toString().split(''));
        // return numInPow.toLocaleString();
        return answer;
}

addEventListener('message', function () {

    postMessage({
        answer: calc(),
        code: calc.toString()
    });

})