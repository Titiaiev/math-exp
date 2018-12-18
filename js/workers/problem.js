
const calc = function calc() {
  // answer:
  let result = 0;

  result = 0;
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
    check: test(0),
  });
});
