/* eslint-disable import/extensions */
/* eslint-disable func-names */
import isPrimeNumber from './isPrimeNumber.js';

let currentNum = 1e3;
const maxNum = currentNum * 10;
const primeNumbers = [];
// let numsBeforeFilter = 0;
// собираем массив простых пятизначных чисел
for (currentNum; currentNum < maxNum; currentNum += 1) {
  // numsBeforeFilter += 1;
  if (isPrimeNumber(currentNum)) {
    primeNumbers.push(currentNum);
  }
}


function useWorker(data = [], threads, getPolindroms) {
  const chuncksCount = threads || 1;
  const threadsArray = [];
  const { length } = data;
  const part = Math.ceil(data.length / threads);
  let _s = 0;
  let _e = part;

  for (let i = 0; i < chuncksCount; i += 1) {
    // eslint-disable-next-line no-loop-func
    const thread = new Promise((resolve, reject) => {
      console.log(`chunck-${i}: _s: ${_s}, _e: ${_e}`);

      const worker = new Worker('useworker/worker.js');

      worker.postMessage({
        nums: data,
        start: _s,
        end: _e,
        getPolindroms: getPolindroms || false,
      });

      _s = _e + 1;
      _e = ((_e + part) < length) ? (_e + part) : length;

      worker.onmessage = function (e) { resolve(e.data); };
      worker.onerror = function (err) { reject(Error(err.filename, err.lineno, err.message)); };
      // worker.terminate();
    });

    threadsArray.push(thread);
  }

  return Promise.all(threadsArray);
}


const start = Date.now();
useWorker(primeNumbers, 4, false)
  .then((d) => {
    // let fullArrayOfPolindroms = [];
    // d.forEach((arr) => {
    //   fullArrayOfPolindroms = [].concat(fullArrayOfPolindroms, arr.polindroms);
    // });

    // console.log(fullArrayOfPolindroms);
    // console.log(d);
    // const filteredByA = fullArrayOfPolindroms.filter(v => v.a % 2 === 0);
    // const filteredByB = fullArrayOfPolindroms.filter(v => v.b % 2 === 0);
    // console.log(filteredByA);
    // console.log(filteredByB);

    // выбрать максимальный полиндром
    console.log(d.sort((a, b) => b.maxPolindrom - a.maxPolindrom)[0]);
    const end = Date.now();
    console.log(`${(end - start) / 1000}s`);
  })
  .catch((err) => { console.log(err); });
