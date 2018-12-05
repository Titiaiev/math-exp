

const calc = function calc() {
  let sum = 0;


  let sumOfSqrts = 0;

  for (let i = 1; i <= 100; i += 1) {
    sum += i;
    sumOfSqrts += i * i;
  }
  return sum * sum - sumOfSqrts;
};

// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  postMessage({
    answer: calc(),
    code: calc.toString(),
  });
});
