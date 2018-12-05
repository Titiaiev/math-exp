// ответ 4613732
// calc 0.247 - 0.370 ms
const calc = function calc() {
  let sumOfEvenFibonacci = 0;

  function fibonacci(maximum) {
    const max = maximum || 4e5; // 400000
    const array = [1, 2];
    for (let i = 1; array[i] < max; i += 1) {
      const curentNum = array[i] + array[i - 1];
      if (curentNum < max) {
        array.push(curentNum);
      }
    }
    return array;
  }

  // найти числа Фибоначчи и записать в массив
  const arraysFib = fibonacci(4e6); // 4000000

  // сложить чные числа из массива
  for (let i = 0; i < arraysFib.length; i += 1) {
    if (arraysFib[i] % 2 === 0) {
      sumOfEvenFibonacci += arraysFib[i];
    }
  }

  return sumOfEvenFibonacci;
};
importScripts('../timer.js');
// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  // eslint-disable-next-line no-undef
  const answer = timer('problem2 done for: ', calc);


  postMessage({
    answer,
    code: calc.toString(),
  });
});
