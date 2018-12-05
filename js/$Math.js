// eslint-disable-next-line no-unused-vars
class $Math {
  static fibonacciesList(maximum) {
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

  static isPrimeNumber(num) {
    const s = num;
    if (s % 2 === 0 && s !== 2) return false;
    // if (s > 30) s = Math.floor(Math.sqrt(s));
    for (let i = 2; i < s; i += 1) {
      if (num % i === 0) return false;
    }
    return !!((num !== 1 || num === 2));
  }
}

$Math.eratosfen = function eratosfen(n) {
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
};

$Math.isPolindrom = function isPolindrom(num) {
  const str = String(num);
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }

  return true;
};

$Math.fibonacci = function fibonacci(x) {
  // проверка наличия результата для парамтра x.
  if (!$Math.fibonacci.cache[x]) { // если результат не найден то производим вычесления.
    if (x > 1) {
      $Math.fibonacci.cache[x] = fibonacci(x - 1) + fibonacci(x - 2);
    } else {
      $Math.fibonacci.cache[x] = x;
    }
  }
  return $Math.fibonacci.cache[x];
}; $Math.fibonacci.cache = {};

$Math.Random = {
  /**
 * Случайное число с плавающей точкой в интервале [min, max)
 * @param   {number} min минимальное число
 * @param   {number} max максимальное число
 * @returns {number} число с плавающей точкой
 */
  getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  },


  /**
 * Случайное целое число в интервале [min, max)
 * @param   {number} min минимальное число
 * @param   {number} max максимальное число
 * @returns {number} целое число
 */
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },


  /**
 * Случайное целое число в интервале [min, max]
 * @param   {number} min минимальное число
 * @param   {number} max максимальное число
 * @returns {number} целое число
 */
  getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },


  /**
 * 0 || 1
 * @returns {number} 0 || 1
 */
  oneOrZero() {
    return Math.floor(Math.random() * 2);
  },


  /**
 * true || false
 * @returns {boolean} true || false
 */
  getRandomBoolean1() {
    return (Math.floor(Math.random() * 2) === 0);
  },


  /**
 * Возвращает один из двух аргументов
 * @param   {[[Type]]} first  любой аргумент
 * @param   {[[Type]]} second любой аргумент
 * @returns {[[Type]]} случайный аргумент из двух
 */
  firstOrSecond(first, second) {
    return (Math.floor(Math.random() * 2) === 0) ? first : second;
  },


  /**
 * Возвращает случайный элемент из массива
 * @param   {Array}    numPool массив значений
 * @returns {[[Type]]} значение из массива
 */
  getRandomElementFromArray(numPool) {
    if (Array.isArray(numPool)) {
      return numPool[Math.floor(Math.random() * numPool.length)];
    }
    return null;
  },


  /**
 * Выбирает случайный элемент массива отфильтрованый исключениями из второго массива
 * @param   {Array}    numPool     массив значений
 * @param   {Array}    excludePool массив значений, которые нужно отсеить
 * @returns {[[Type]]} любое значение из массива (первого аргумента)
 * или null, если аргумент не массив
 */
  getRandomFilteredElementFromArray(numPool, excludePool) {
    let filteredPool = [];


    const _excludePool = (Array.isArray(excludePool)) ? excludePool : null;


    const _numPool = (Array.isArray(numPool)) ? numPool : null;

    if (_numPool) {
      if (_excludePool) {
        for (let i = 0; i < _numPool.length; i += 1) {
          if (_excludePool.indexOf(_numPool[i]) === -1) {
            filteredPool.push(_numPool[i]);
          }
        }
      } else {
        filteredPool = _numPool;
      }

      return filteredPool[Math.floor(Math.random() * filteredPool.length)];
    }

    return null;
  },

};
