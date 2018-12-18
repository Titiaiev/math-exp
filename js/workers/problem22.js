
const calc = async function calc() {
  // answer: 871198282

  const alphabetMap = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  const result = await fetch('/problems_list/names.txt')
    .then(response => response.text()
      .then((text) => {
        const names = text.split(',').map(word => word.substring(1, word.length - 1));
        names.sort();

        let sumOfPoints = 0;
        names.forEach((name, position) => {
          let nameNum = 0;
          name.split('').forEach((letter) => {
            nameNum += alphabetMap[letter];
          });
          sumOfPoints += nameNum * (position + 1);
        });
        return sumOfPoints;
      }));
  return result;
};

function test(answer) {
  return calc() === answer;
}
console.log(calc());
// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  calc().then((a) => {
    postMessage({
      answer: a,
      code: calc.toString(),
      check: a === 871198282,
    });
  });
});
