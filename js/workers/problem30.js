importScripts('../$Math.js');
// 9**5 = 59049
// 9**5 * 6 = 354294

const calc = async function calc() {
  // answer: 443839
  let result = 0;

  for (let i = 11; i < 354294; i += 1) {
    const sum = $Math.splitTheNumberIntoDigits(i)
      .map(d => d ** 5)
      .reduce((p, c) => p + c, 0);
    if (sum === i) {
      result += sum;
      // console.log(sum);
    }
  }

  return result;
};


// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  calc().then((a) => {
    postMessage({
      answer: a,
      code: calc.toString(),
      check: a === 443839,
    });
  });
});
