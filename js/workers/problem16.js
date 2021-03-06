/* eslint-disable no-undef */
// https://github.com/peterolson/BigInteger.js
importScripts('../bigInteger.js');

const calc = function calc() {
  // answer 1366
  const arr = bigInt(2).pow(1000).toString().split('');
  let sum = 0;
  arr.forEach((element) => {
    sum += Number(element);
  });

  return sum;
};

function test(answer) {
  return calc() === answer;
}

// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  postMessage({
    answer: calc(),
    code: calc.toString(),
    check: test(1366),
  });
});
