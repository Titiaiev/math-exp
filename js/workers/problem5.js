'use strict'

var calc = function() {
    var n = 1;
        console.time('time of work: ')
        outer:
            // for (var i = 20; ; i++) {       //первоначальный вариант
            for (var i = 2520;; i += 2520) { //подглядел на форуме
                for (var j = 2; j <= 20; j++) {
                    if (i % j !== 0) {
                        break;
                    }
                    if (j === 20 && i % j === 0) {
                        n = i;
                        break outer;
                    }
                }
            }
        console.timeEnd('time of work: ')

        return n;
}

addEventListener('message', function () {

    postMessage({
        answer: calc(),
        code: calc.toString()
    });

})