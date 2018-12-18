

const calc = function calc() {
  // answer 233168
  let sumOfnumbers = 0;
  for (let i = 3; i < 1000; i += 1) {
    // проверить является ли число кратным 3-м или 5-ти
    if (i % 3 === 0 || i % 5 === 0) {
      // если так то добавить его к сумме кратных чисел
      sumOfnumbers += i;
    }
  }
  return sumOfnumbers;
};

function test(answer) {
  return calc() === answer;
}

// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  postMessage({
    answer: calc(),
    code: calc.toString(),
    check: test(233168),
  });
});
