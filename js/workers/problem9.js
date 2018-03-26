'use strict'

var calc = function() {
    //ответ: 31875000
        /*
         * a < b < c
         * a^2 + b^2 = c^2
         * a + b + c = 1000
         * a + b > c   //(по теореме Пифагора)
         * c.max = 499 //так как сумма <a> и <b> всегда больше <c>
         * b.max = 498 //b < c
         * a.min = 3   //1000 - b -c
         * c.min = 335
         * a.max = 332
         */
        var c = 499,
            b = (c - 1),
            a = (1000 - c - b);

        function productOfABC() {
            for (c; c >= 335; c--, b = c - 1, a = 1000 - c - b) {
                for (a, b; a <= 332; a++, b--) {
                    if ((c * c) === ((a * a) + (b * b))) {
                        return a * b * c;
                    }
                }
            }
        }

        return productOfABC();
}

addEventListener('message', function () {

    postMessage({
        answer: calc(),
        code: calc.toString()
    });

})