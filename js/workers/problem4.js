'use strict'

var calc = function() {
    var polindrom = 0;

        console.time('время выполнения скрипта');
        for (var i = 999; i > 99; i--) {
            for (var j = 999; j > 99; j--) {
                if (isPolindrom(i * j) && i * j > polindrom) {
                    polindrom = i * j;
                    console.log('i: ' + i);
                    console.log('j: ' + j);
                    console.log('-------------');
                }
            }
        }
        console.timeEnd('время выполнения скрипта');

        function isPolindrom(num) {
            var str = num + '';
            for (let i = 0; i <= str.length; i++) {
                if (str[0] === str[str.length - 1]) {
                    var str = str.slice(1, str.length - 1);
                    // console.log(str);
                } else {
                    // console.log(str);
                    break;
                }
            }
            if (str.length <= 1) {
                return true
            } else {
                return false
            }
        }

        return polindrom;
}

addEventListener('message', function () {

    postMessage({
        answer: calc(),
        code: calc.toString()
    });

})