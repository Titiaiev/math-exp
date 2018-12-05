/* eslint-disable no-param-reassign */
// ответ {arg1: 69143, arg2: 91009, maxPolindrom: 1997667991}
// let counter = 0;

function isPolindrom(num) {
  const str = String(num);
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    // counter += 1;
    if (str[start] !== str[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }

  return true;
}

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

function isPrimeNumber(num) {
  return isPrimeNumber.cache[num];
}
isPrimeNumber.cache = eratosfen(1e5);

function findMaxPolindrom(data) {
  const { length } = data;
  let i = 0;
  let j = 0;
  const resObj = {
    arg1: 0,
    arg2: 0,
    maxPolindrom: 0,
  };


  for (i; i < length; i += 1) {
    const n1 = data[i];

    for (j; j < length; j += 1) {
      const n2 = data[j];
      const res = Math.imul(n1, n2);
      if (isPolindrom(res)) {
        if (res > resObj.maxPolindrom) {
          resObj.maxPolindrom = res;
          resObj.arg1 = n1;
          resObj.arg2 = n2;
        }
      }
    }
    // смещение по диагонали, чтобы не повторять уножение с теми же множителями (a * b === b * a)
    j = i + 1;
  }

  return resObj;
}

// console.time('findMaxPolindrom()');

let currentNum = 1e4;
const maxNum = 1e5;
const primes = [];

// собираем массив простых пятизначных чисел
for (currentNum; currentNum < maxNum; currentNum += 1) {
  if (isPrimeNumber(currentNum)) {
    primes.push(currentNum);
  }
}


const result = findMaxPolindrom(primes);

// console.timeEnd('findMaxPolindrom()');
// console.log(primes);
// console.log(result);
