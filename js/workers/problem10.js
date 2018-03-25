'use strict'

var calc = function() {
    console.time('время выполнения: ');
        var sum = 0;

        function eratosfen(n) {
            var arr = Array(n);
            var p = 2;

            arr.fill(true);
            arr[0] = false;
            arr[1] = false;

            while (p < n && p > 0) {

                for (var i = 2 * p; i < n; i += p) {
                    arr[i] = false;
                }

                p = arr.indexOf(true, (p + 1));
            }

            return arr;
        }

        var list = eratosfen(2000000);

        for (var j = 2; j < list.length; j++) {
            if (list[j]) sum += j;
        }

        console.timeEnd('время выполнения: ');
        return sum;
}

addEventListener('message', function () {

    postMessage({
        answer: calc(),
        code: calc.toString()
    });

})