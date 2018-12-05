

const calc = function calc() {
  // ответ: 837799
  let maxSequence = 0;
  let currentSequence = 0;
  let storedNumber = 2;
  let currentNumber = 1e6; // 1000000

  function collatz(n) {
    let iter = 0;
    let _n = n;

    while (_n !== 1) {
      _n = (_n % 2 === 0) ? (_n / 2) : (_n * 3 + 1);
      iter += 1;
    }
    return (iter + 1);
  }

  while (currentNumber) {
    currentSequence = collatz(currentNumber);
    if (currentSequence > maxSequence) {
      maxSequence = currentSequence;
      storedNumber = currentNumber;
    }
    currentNumber -= 1;
  }

  return storedNumber;
};

// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  postMessage({
    answer: calc(),
    code: calc.toString(),
  });
});
