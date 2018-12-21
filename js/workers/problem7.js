/* eslint-disable no-undef */
importScripts('../$Math.js');

const calc = function calc() {
  // верный ответ 104743
//   function isPrimeNumber(num) {
//     const s = num;
//     if (s % 2 === 0 && s !== 2) return false;
//     // if (s > 30) s = Math.floor(Math.sqrt(s));
//     for (let i = 2; i < s; i += 1) {
//       if (num % i === 0) return false;
//     }
//     return !!((num !== 1 || num === 2));
//   }

  let counter = 0;


  let n = 0;
  for (let i = 1; counter < 10001; i += 1) {
    // использую свою библиотеку
    if ($Math.isPrimeNumber(i)) {
      n = i;
      counter += 1;
    }
  }

  return n;
};

function test(answer) {
  return calc() === answer;
}

// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  postMessage({
    answer: calc(),
    code: calc.toString(),
    check: test(104743),
  });
});
