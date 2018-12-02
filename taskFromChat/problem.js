// Напишите программу, которая возвращает наибольшее число палиндром,
// которое является произведением двух простых пятизначных чисел,
// а также возвращает сами сомножители.
// Простое число - это натуральное число,
// которое делится нацело только на 1 и на себя само (2, 3, 5, 7, 11, …)
// Палиндром – строка, которая читается одинаково в обоих направлениях (например ABBA)

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

function isPrimeNumber(num) {
  const s = num;
  if (s % 2 === 0 && s !== 2) return false;
  // if (s > 30) s = Math.floor(Math.sqrt(s));
  for (let i = 2; i < s; i += 1) {
    if (num % i === 0) return false;
  }
  return !!((num !== 1 || num === 2));
}

function test(a, b) {
  const m = a * b;
  if (isPolindrom(m)) {
    return m;
  }
  return null;
}

console.time('start');

let a = 1e4;
const primes = [];
const result = {
  arg1: 0,
  arg2: 0,
  mult: 0,
};

// собираем массив простых пятизначных чисел
for (a; a < 1e5; a += 1) {
  if (isPrimeNumber(a)) {
    primes.push(a);
  }
}

// console.log(primes);

// здесь можно сократить вычисления

const { length } = primes;

for (let i = 0; i < length; i += 1) {
  const n1 = primes[i];
  for (let j = 0; j < length / 2; j += 1) {
    const n2 = primes[j];
    // console.log(j, i);
    const res = test(n1, n2);
    if (res && res > result.mult) {
      result.mult = res;
      result.arg1 = n1;
      result.arg2 = n2;
    }
  }
}


// 9975799
// primes.forEach((n) => {
//   let i = 0;
//   const length = primes.length;

//   for (i; i < length; i += 1) {
//     const res = test(n, primes[i]);
//     if (res && res > result.mult) {
//       result.mult = res;
//       result.arg1 = n;
//       result.arg2 = primes[i];
//     }
//   }
// });

console.timeEnd('start');

console.log(result);
