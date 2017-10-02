//"use strict";

var answers = {
    problem1: function () {
        var sumOfnumbers = 0;
        for (var i = 3; i < 1000; i++) {
            // проверить является ли число кратным 3-м или 5-ти
            if (i % 3 === 0 || i % 5 === 0) {
                // если так то добавить его к сумме кратных чисел
                sumOfnumbers += i;
            }
        }
        return sumOfnumbers;
    },

    problem2: function () {
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
    },

    problem3: function () {
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

    },

    problem4: function () {
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

        return polindrom
    },

    problem5: function () {
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
    },

    problem6: function () {
        var sum = 0,
            sumOfSqrts = 0;

        for (let i = 1; i <= 100; i++) {
            sum += i;
            sumOfSqrts += i * i;
        }
        return sum * sum - sumOfSqrts;
    },

    problem7: function () {
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
    },

    problem8: function () {
        var longString = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450",
            max13 = 1,
            temp = 1,
            memPosition = 0;

        while (memPosition !== longString.length - 1) {

            for (let i = 0; i < 13; i++) {
                temp *= +longString[memPosition + i];
            }

            if (temp > max13) {
                max13 = temp;
            }

            ++memPosition;
            temp = 1;

        }

        return max13;
    },

    problem9: function () {
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
            b = 498,
            a = 3;

        function productOfABC() {
           for(c; c >= 335; c--, b = c -1, a = 1000 - c - b) {
               for(a, b; a <= 332; a++, b--) {
                   if( (c * c) === ((a * a) + (b * b)) ) {
                       return a * b * c;
                   }
               }
           }
        }

        return productOfABC();
    },

    problem10: function() {
        console.time('время выполнения: ');
        var sum = 0;

        function eratosfen(n) {
            var arr = Array(n);
            var p = 2;

            arr.fill(true);
            arr[0] = false;
            arr[1] = false;

            while(p < n && p > 0) {

                for(var i = 2 * p; i < n; i += p) {
                    arr[i] = false;
                }

                p = arr.indexOf(true, (p + 1));
            }

            return arr;
        }

        var list = eratosfen(2000000);

        for(var j = 2; j < list.length; j++) {
            if(list[j]) sum += j;
        }

        console.timeEnd('время выполнения: ');
        return sum;
    },

    problem11: function() {
        var matrix = [
            [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
            [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
            [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
            [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
            [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
            [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
            [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
            [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
            [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
            [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
            [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
            [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
            [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
            [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
            [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
            [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
            [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
            [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
            [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
            [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
        ];

        var results = [],
            h = matrix.length,
            w = matrix[0].length;

        function max_product_in_row() {
            var max = 0;

            for(var rowsNum = 0; rowsNum < h; rowsNum++) {
                for(var lastNum = 3; lastNum < matrix[rowsNum].length; lastNum++) {

                    var product_of_four_consecutive_numbers = matrix[rowsNum][lastNum]
                                                                * matrix[rowsNum][lastNum - 1]
                                                                * matrix[rowsNum][lastNum - 2]
                                                                * matrix[rowsNum][lastNum -3];

                    if(product_of_four_consecutive_numbers > max) {
                        max = product_of_four_consecutive_numbers;
                    }
                }
            }

            return max;
        }

        function max_product_in_col() {
            var max = 0;

            for(var colsNum = 0; colsNum < w; colsNum++) {
                for(var rowsNum = 3; rowsNum < h; rowsNum++) {
                    var product_of_four_consecutive_numbers = matrix[rowsNum][colsNum]
                                                                * matrix[rowsNum - 1][colsNum]
                                                                * matrix[rowsNum - 2][colsNum]
                                                                * matrix[rowsNum -3][colsNum];

                    if(product_of_four_consecutive_numbers > max) {
                        max = product_of_four_consecutive_numbers;
                    }
                }
            }
            return max;
        }

        function max_product_in_diagonal() {
            var max = 0;

            for(var colsNum = 3; colsNum < w; colsNum++) {
                for(var rowsNum = 3; rowsNum < h; rowsNum++) {
                    var product_of_four_consecutive_numbers = matrix[rowsNum][colsNum]
                                                                * matrix[rowsNum - 1][colsNum - 1]
                                                                * matrix[rowsNum - 2][colsNum - 2]
                                                                * matrix[rowsNum -3][colsNum - 3];

                    if(product_of_four_consecutive_numbers > max) {
                        max = product_of_four_consecutive_numbers;
                    }
                }
            }
            return max;
        }

        function max_product_in_diagonal2() {
            var max = 0;

            for(var colsNum = 3; colsNum < w; colsNum++) {
                for(var rowsNum = 0; rowsNum < h-4; rowsNum++) {
                    var product_of_four_consecutive_numbers = matrix[rowsNum][colsNum]
                                                                * matrix[rowsNum + 1][colsNum - 1]
                                                                * matrix[rowsNum + 2][colsNum - 2]
                                                                * matrix[rowsNum + 3][colsNum - 3];

                    if(product_of_four_consecutive_numbers > max) {
                        max = product_of_four_consecutive_numbers;
                    }
                }
            }
            return max;
        }

        results.push(max_product_in_row());
        results.push(max_product_in_col());
        results.push(max_product_in_diagonal());
        results.push(max_product_in_diagonal2());

        //результат решения задачи
        return Math.max(results[0], results[1], results[2], results[3]);
    }

};


window.onload = function() {

    // добавить кнопки не пустым элементам списка и повесить на них события клика
    var problemsList = document.querySelectorAll("#problems-list li");
    for (let i = 0; i < problemsList.length; i++) {
        if (problemsList[i].childNodes.length > 0) {
            // alert("ok");
            let btn = document.createElement("button");
            btn.innerText = "решить";
            problemsList[i].appendChild(btn);

//            let done = false;
            btn.onclick = function () {
//                if(!done) {
                    showAnswer(problemsList[i], "problem" + (i + 1));
//                    done = true;
//                }

               var removedBtn = problemsList[i].removeChild(btn);
            }
        }
    }

    // показать ответ и код
    function showAnswer(target, problemsNumber) {
        if (answers[problemsNumber] !== undefined) {

            var answerSection = document.createElement("p");
            answerSection.className += ' answer-section';
            answerSection.innerText = "Ответ: " + answers[problemsNumber]();
            target.appendChild(answerSection);

            var code = document.createElement("pre");
            code.className += ' code-section';
            code.innerHTML = answers[problemsNumber];
            target.appendChild(code);
        }

    }
}
