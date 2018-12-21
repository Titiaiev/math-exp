/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */

const calc = function calc() {
  // answer: 232792560
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

function test(answer) {
  return calc() === answer;
}

// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  postMessage({
    answer: calc(),
    code: calc.toString(),
    check: test(232792560),
  });
});
