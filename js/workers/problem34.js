importScripts('../$Math.js');
const calc = async function calc() {
  // answer:
  let result = 0;

  result = 0;
  return result;
};


// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  calc().then((a) => {
    postMessage({
      answer: a,
      code: calc.toString(),
      check: a === 10,
    });
  });
});
