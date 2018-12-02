/* eslint-disable no-param-reassign */
function isPolindrom(num) {
  let str = String(num);

  for (let i = 0; i <= str.length; i += 1) {
    if (str[0] === str[str.length - 1]) {
      str = str.slice(1, str.length - 1);
    } else {
      break;
    }
  }
  if (str.length <= 1) {
    return true;
  }
  return false;


  // это решение гараздо короче, но медленее в 5 раз
  // const checkingValue = num.toString();
  // const reverseValue = checkingValue.split('').reverse().join('');
  // return checkingValue === reverseValue;
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
  // const s = num;
  // if (s % 2 === 0 && s !== 2) return false;
  // // if (s > 30) s = Math.floor(Math.sqrt(s));
  // for (let i = 2; i < s; i += 1) {
  //   if (num % i === 0) return false;
  // }
  // return !!((num !== 1 || num === 2));
  return isPrimeNumber.cache[num];
}
isPrimeNumber.cache = eratosfen(1e5);

// function test(a, b) {
//   const m = Math.imul(a, b);
//   if (isPolindrom(m)) {
//     return m;
//   }
//   return null;
// }

// 34982429
let counter = 0;
function findMaxPolindrom(data) {
  const { length } = data;
  let i = 0;
  let j = 0;
  const resObj = {
    arg1: 0,
    arg2: 0,
    mult: 0,
  };


  for (i; i < length; i += 1) {
    const n1 = data[i];
    // counter += 1;
    for (j; j < length; j += 1) {
      const n2 = data[j];
      const res = Math.imul(n1, n2);
      // if (isPolindrom(res)) {
        counter += 1;
        if (res > resObj.mult) {
          resObj.mult = res;
          resObj.arg1 = n1;
          resObj.arg2 = n2;
        }
      // }
      // counter += 1;
    }
    // смещение по диагонали, чтобы не повторять уножение с теми же множителями (a * b === b * a)
    j = i + 1;
  }

  return resObj;
}

console.time('findMaxPolindrom()');

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

console.timeEnd('findMaxPolindrom()');
console.log(primes);
console.log(result);
console.log(counter);
