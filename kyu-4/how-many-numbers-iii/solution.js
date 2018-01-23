const cache = (() => {
  const getKeyForCacheEntry = (n, k, min) => `${n},${k},${min}`;
  const data = Array.from(new Array(10))
    .map((_, index) => index + 1)
    .reduce((cache, min) => {
      cache[getKeyForCacheEntry(0, 0, min)] = [''];
      return cache;
    }, {});

  return {
    isInCache: function(n, k, min) {
      return data.hasOwnProperty(getKeyForCacheEntry(n, k, min));
    },
    putToCache: function(n, k, min, numbers) {
      if (!this.isInCache(n, k, min)) {
        data[getKeyForCacheEntry(n, k, min)] = numbers;
      }
    },
    getFromCache: function(n, k, min) {
      return this.isInCache(n, k, min)
        ? data[getKeyForCacheEntry(n, k, min)]
        : [];
    }
  }
})();

const findAll = (n, k) => {
  const numbers = generateNumbers(n, k, 1);
  return numbers.length > 0
    ? [numbers.length, numbers[0], numbers[numbers.length - 1]]
    : [];
};

const generateNumbers = (n, k, min) => {
  if (cache.isInCache(n, k, min)) {
    return cache.getFromCache(n, k, min);
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
  cache.putToCache(n, k, min, numbers);
  return numbers;
};

module.exports = {
  findAll
};
