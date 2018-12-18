importScripts('../bigInteger.js');
const calc = function calc() {
  // answer: 648
  let result = 0;

  function factorial(n) {
    if (!factorial.cache[n]) {
      if (n === 1) {
        factorial.cache[n] = n;
      } else {
        // eslint-disable-next-line no-undef
        factorial.cache[n] = bigInt(n).multiply(factorial(n - 1));
      }
    }

    return factorial.cache[n].toString();
  }
  factorial.cache = {};

  result = factorial(100).split('').reduce((acc, current) => Number(acc) + Number(current));

  return result;
};

function test(answer) {
  return calc() === answer;
}

// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  postMessage({
    answer: calc(),
    code: calc.toString(),
    check: test(648),
  });
});
