
const calc = function calc() {
  // answer: 31626
  let result = 0;

  // словарь
  // ключ - число
  // значение - сумма делителей
  // null нужен чтоб избавиться от нулевого индекса
  const map = [null];

  function getProperDivisors(n) {
    const properDivisors = [];
    if (n === 1) {
      properDivisors.push(n);
      return properDivisors;
    }
    const half = Math.floor(n / 2);
    let current = half;

    while (current > 0) {
      if (n % current === 0 || current === 1) {
        properDivisors.push(current);
      }
      current -= 1;
    }

    return properDivisors;
  }

  function getSumOfProperDivisors(n) {
    return getProperDivisors(n).reduce((a, b) => a + b,
      0);
  }

  for (let i = 1; i < 1e4; i += 1) {
    map.push(getSumOfProperDivisors(i));
  }

  map.forEach((number, index, arr) => {
    if (index !== number && index === arr[number]) {
      result += (index + number);
      arr[index] = null; // чтоб не дублировались результаты
    }
  });

  return result;
};

function test(answer) {
  return calc() === answer;
}

// console.log(calc());
// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  postMessage({
    answer: calc(),
    code: calc.toString(),
    check: test(31626),
  });
});
