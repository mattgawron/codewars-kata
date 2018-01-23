const findAll = (n, k) => {
  const numbers = generateNumbers(n, k, 1);
  return numbers.length > 0
    ? [numbers.length, numbers[0], numbers[numbers.length - 1]]
    : [];
};

const generateNumbers = (n, k, min) => {
  if (n <= 0 || k <= 0) {
    return [''];
  }
  if (isInCache(n, k, min)) {
    return getFromCache(n, k, min);
  }
  let numbers = [];
  for (let nextNumber = min; nextNumber <= Math.min(n/k, 10); ++nextNumber) {
    const remainingSum = n - nextNumber;
    const remainingDigits = k - 1;
    const isNextSumBigEnough = remainingSum >= remainingDigits * nextNumber;
    const isNextSumSmallEnough = remainingSum <= 9 * remainingDigits;
    if (isNextSumBigEnough && isNextSumSmallEnough) {
      numbers = [
        ...numbers,
        ...generateNumbers(remainingSum, remainingDigits, nextNumber)
          .map(number => [nextNumber, ...number].join(''))
      ];
    }
  }
  putToCache(n, k, min, numbers);
  return numbers;
};

const cache = {};

// const initCache = () => {
//   const cache = {};
//   for (let i = 1; i < 10; ++i) {
//     cache[getKeyForCacheEntry(0, 0, i)] = [''];
//   }
//   return cache;
// };

const isInCache = (n, k, min) => {
  return cache.hasOwnProperty(getKeyForCacheEntry(n, k, min));
};

const putToCache = (n, k, min, numbers) => {
  if (!isInCache(n, k, min)) {
    cache[getKeyForCacheEntry(n, k, min)] = numbers;
  }
};

const getFromCache = (n, k, min) => {
  return isInCache(n, k, min) ? cache[getKeyForCacheEntry(n, k, min)] : [];
};

const getKeyForCacheEntry = (n, k, min) => `${n},${k},${min}`;

module.exports = {
  findAll
};
