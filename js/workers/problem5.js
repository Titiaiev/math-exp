/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */

// 232792560
const calc = function calc() {
  let n = 1;

  outer:
  // for (var i = 20; ; i++) {       //первоначальный вариант
  for (let i = 2520; ; i += 2520) { // подглядел на форуме
    for (let j = 2; j <= 20; j += 1) {
      if (i % j !== 0) {
        break;
      }
      if (j === 20 && i % j === 0) {
        n = i;
        break outer;
      }
    }
  }

  return n;
};

// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  postMessage({
    answer: calc(),
    code: calc.toString(),
  });
});
