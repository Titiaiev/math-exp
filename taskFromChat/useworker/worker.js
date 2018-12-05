/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
// ответ {arg1: 69143, arg2: 91009, maxPolindrom: 1997667991}
importScripts('isPolindrom.js');

function findMaxPolindrom(data, startRow, endRow, getPolindroms = false) {
  const { length } = data;
  const end = endRow || length;
  let i = startRow || 0; // row
  let j = startRow || 0; // column


  const resObj = {
    arg1: 0,
    arg2: 0,
    maxPolindrom: 0,
  };
  if (getPolindroms) { resObj.polindroms = []; }


  for (i; i < end; i += 1) {
    const n1 = data[i];

    for (j; j < length; j += 1) {
      const n2 = data[j];
      const res = Math.imul(n1, n2);

      // eslint-disable-next-line no-undef
      if (isPolindrom(res)) {
        if (getPolindroms) {
          resObj.polindroms.push({
            a: n1,
            b: n2,
            mult: res,
          });
        }

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

// this.localStorage.setItem('testFromWorker', 'testString');

onmessage = function (e) {
  const { data } = e;
  const result = findMaxPolindrom(data.nums, data.start, data.end, data.getPolindroms);
  postMessage(result);
};
// close();
