importScripts('../$Math.js');
const calc = async function calc() {
  // answer: 669171001
  let result = 0;
  let pointer = 1;
  let delta = 2;
  const size = 1001 * 1001;

  result = pointer;
  while(pointer < size) {
    let tick = 4;
    while(tick) {
      pointer += delta;
      result += pointer;
      tick --;
    }

    delta += 2;
  }

  return result;
};


// eslint-disable-next-line no-restricted-globals
addEventListener('message', () => {
  calc().then((a) => {
    postMessage({
      answer: a,
      code: calc.toString(),
      check: a === 669171001,
    });
  });
});
