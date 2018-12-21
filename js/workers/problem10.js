/* eslint-disable no-undef */
/* eslint-disable func-names */
importScripts('../$Math.js');
importScripts('../timer.js');

const calc = function () {
  // answer: 142913828922
  let sum = 0;
  // использую свою библиотеку
  const list = $Math.eratosfen(2e6); // 2000000

  for (let j = 2; j < list.length; j += 1) {
    if (list[j]) sum += j;
  }

  return sum;
};

function test(answer) {
  return calc() === answer;
}

// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  postMessage({
    answer: timer('problem10 done for: ', calc),
    code: calc.toString(),
    check: test(142913828922),
  });
});
