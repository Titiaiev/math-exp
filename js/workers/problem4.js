'use strict'
// answer 906609
var calc = function() {
    var polindrom = 0;

        console.time('время выполнения скрипта');
        for (var i = 999; i > 99; i--) {
            for (var j = 999; j > 99; j--) {
                var currentMult = ( i * j );
                if (isPolindrom(currentMult) && currentMult > polindrom) {
                    polindrom = i * j;
                    // console.log('i: ' + i);
                    // console.log('j: ' + j);
                    // console.log('-------------');
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

            // это решение гараздо короче, но медленее в 5 раз
            // var checkingValue = num.toString();
            // var reverseValue = checkingValue.split('').reverse().join('');
            // return checkingValue === reverseValue;
        }

        return polindrom;
}

addEventListener('message', function () {

    postMessage({
        answer: calc(),
        code: calc.toString()
    });

})