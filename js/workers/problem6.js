

const calc = function calc() {
// answer: 25164150
  let sum = 0;


  let sumOfSqrts = 0;

  for (let i = 1; i <= 100; i += 1) {
    sum += i;
    sumOfSqrts += i * i;
  }
  return sum * sum - sumOfSqrts;
};

function test(answer) {
  return calc() === answer;
}

// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  postMessage({
    answer: calc(),
    code: calc.toString(),
    check: test(25164150),
  });
});
