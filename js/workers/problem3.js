'use strict'

var calc = function() {
    var z = 600851475143;

        /*
         *определяет является ли число простым
         *Простые числа — это целые натуральные (положительные) числа больше единицы,
         *которые имеют ровно 2 натуральных делителя (только 1 и самого себя),
         *т.е.не делится ни на одно другое число, кроме самого себя и единицы.
         *Все остальные числа кроме единицы называются составными.
         *Таким образом, все натуральные числа, за исключением единицы, разбиваются на простые и составные.
         */
        function isPrimeNumber(num) {
            for (let i = num - 1; i > 1; i--) {
                if (num % i == 0) return false
            }
            return (num !== 1) ? true : false
        }

        function firstPrimeDivider(num) {
            for (let i = 2; i < num; i++) {
                if (num % i === 0 && isPrimeNumber(i)) return i
            }
        }

        function maxPrimeDivider(num) {
            var max = 0;
            for (let i = 0; i < Math.sqrt(num); i++) {
                if (num % i === 0 && isPrimeNumber(i)) max = i;
            }
            return max
        }

        return maxPrimeDivider(z);
}

addEventListener('message', function () {

    postMessage({
        answer: calc(),
        code: calc.toString()
    });

})