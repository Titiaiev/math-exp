"use strict";

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
        var longArrNum = [ 7316717,6531330,62491922,5119674426,574742355,349194934,
            969835203,1277450,6326239578,31801698,48018694,78851843,
            858615607,89112949,495459501,737958331,952853,208805511,
            125406987,47158523,863050715,6932909,6329522,7443043557,
            66896648,950445244,52316173,185640309,871112,1722383113,
            6222989,3423380,308135336,27661428,280644448,6645238749,
            30358907,296290,4915604407,7239071,38105158,59307960866,
            7017242,7121883,998797908,79227492,19016997,2088,8093776,
            6572733,3001053,3678812,20235,42180,97512545,40594,752243,
            52584907,711670,556013604,83958644,670632,44157,22155397,
            5369781,7977846,17406495,514929086,25693219,78468622482,
            8397224,13756570,560574902,6140797,29686524,14535100474,
            821663,70484403,199890008,895243450,6585412,27588666881,
            1642717,1479924,4429282,3086346567,48139191,23162824586,
            1786645,8359124,56652947,654568284,89128831,42607690042,
            2421902,2671055,6263211,1110937054,42175069,416589604080,
            7198403,850962,45544436,298123098,787992724,4284909188,
            8458015,6166097,91913387,549920052,4063689912,5607176060,
            5886116,467109,40507754,100225698,315520005,5935729725,
            716362,69561882,67042825,248360082,3257530420,752963450
        ];

        var longArrStr = [];
        for (let i = 0; i < longArrNum.length; i++) {
            longArrStr.push(longArrNum[i].toString());
        }

        var longString = longArrStr.join('');

        // return console.log(longString);
        var max13 = 1;
        var temp = 1;
        var memPosition = 0;

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
        return "пока не решено";
    },

    problem10: function(){
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

            let done = false;
            btn.onclick = function () {
                if(!done) {
                    showAnswer(problemsList[i], "problem" + (i + 1));
                    done = true;
                }
            }
        }
    }

    // показать ответ и код
    function showAnswer(target, problemsNumber) {
        if (answers[problemsNumber] !== undefined) {

            var answerSection = document.createElement("p");
            answerSection.style.display = "block";
            answerSection.style.backgroundColor = "#999";
            answerSection.style.color = "#fff";
            answerSection.style.padding = "5px";
            answerSection.innerText = "Ответ: " + answers[problemsNumber]();
            target.appendChild(answerSection);

            var code = document.createElement("pre");
            code.style.display = "block";
            code.style.backgroundColor = "#006E80";
            code.style.color = "#fff";
            code.style.padding = "5px";
            code.innerHTML = answers[problemsNumber];
            target.appendChild(code);
        }

    }
}
