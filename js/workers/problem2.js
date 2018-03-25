'use strict'

var calc = function() {
    var sumOfEvenFibonacci = 0;

        function fibonacci(maximum) {
            var max = maximum || 400000;
            var array = [1, 2];
            for (let i = 1; array[i] < max; i++) {
                let curentNum = array[i] + array[i - 1];
                if (curentNum < max) {
                    array.push(curentNum);
                }
            }
            return array;
        }

        // найти числа Фибоначчи и записать в массив
        var arraysFib = fibonacci(4000000);

        // сложить чные числа из массива
        for (let i = 0; i < arraysFib.length; i++) {
            if (arraysFib[i] % 2 === 0) {
                sumOfEvenFibonacci += arraysFib[i];
            }
        }

        return sumOfEvenFibonacci;
}

addEventListener('message', function () {

    postMessage({
        answer: calc(),
        code: calc.toString()
    });

})