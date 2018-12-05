/* eslint-disable no-undef */
// answer 906609
importScripts('../$Math.js');
importScripts('../timer.js');

const calc = function calc() {
  let polindrom = 0;

  for (let i = 999; i > 99; i -= 1) {
    for (let j = 999; j > 99; j -= 1) {
      const currentMult = (i * j);

      if ($Math.isPolindrom(currentMult) && currentMult > polindrom) {
        polindrom = i * j;
      }
    }
  }
  return polindrom;
};

// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  postMessage({
    answer: timer('problem4 done for: ', calc),
    code: calc.toString(),
  });
});
