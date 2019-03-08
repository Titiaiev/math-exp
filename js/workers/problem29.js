importScripts('../$Math.js');
const calc = async function calc() {
  // answer: Пока не работает. правильный ответ 9183
  let result = 0;
  const temp = [];

  for (let a = 2; a <= 100; a += 1) {
    for (let b = 2; b <= 100; b += 1) {
      temp.push(BigInt(a ** b));
    }
  }

  // temp.sort((a, b) => Number(a) - Number(b));
  // console.log(temp);
  result = new Set(temp).size;
  return result;
};


// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  calc().then((a) => {
    postMessage({
      answer: a,
      code: calc.toString(),
      check: a === 9183,
    });
  });
});
