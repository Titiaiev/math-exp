/* eslint-disable func-names */


const calc = function () {
  console.time('время выполнения: ');
  let sum = 0;

  function eratosfen(n) {
    const arr = Array(n);
    let p = 2;

    arr.fill(true);
    arr[0] = false;
    arr[1] = false;

    while (p < n && p > 0) {
      for (let i = 2 * p; i < n; i += p) {
        arr[i] = false;
      }

      p = arr.indexOf(true, (p + 1));
    }

    return arr;
  }

  const list = eratosfen(2e6); // 2000000

  for (let j = 2; j < list.length; j++) {
    if (list[j]) sum += j;
  }

  console.timeEnd('время выполнения: ');
  return sum;
};

addEventListener('message', () => {
  postMessage({
    answer: calc(),
    code: calc.toString(),
  });
});
