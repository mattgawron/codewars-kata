

const findAll = (n, k) => {
  const numbers = createGenerator().generate(n, k, 1);
  return numbers.length > 0
    ? [numbers.length, numbers[0], numbers[numbers.length - 1]]
    : [];
};

const createGenerator = () => {
  const cache = createCache();
  return {
    generate: function(n, k, min) {
      if (cache.contains(n, k, min)) {
        return cache.get(n, k, min);
      }
      let numbers = [];
      const maxNextNumber = Math.min(n / k, 10);
      for (let nextNumber = min; nextNumber <= maxNextNumber; ++nextNumber) {
        const remainingSum = n - nextNumber;
        const remainingDigits = k - 1;
        const isNextSumBigEnough = remainingSum >= remainingDigits * nextNumber;
        const isNextSumSmallEnough = remainingSum <= 9 * remainingDigits;
        if (isNextSumBigEnough && isNextSumSmallEnough) {
          numbers = [
            ...numbers,
            ...this.generate(remainingSum, remainingDigits, nextNumber)
              .map(number => [nextNumber, ...number].join(''))
          ];
        }
      }
      cache.put(n, k, min, numbers);
      return numbers;
    }
  }
};

const createCache = () => {
  const getKeyForCacheEntry = (n, k, min) => `${n},${k},${min}`;
  const data = Array.from(new Array(10))
    .map((_, index) => index + 1)
    .reduce((cache, min) => {
      cache[getKeyForCacheEntry(0, 0, min)] = [''];
      return cache;
    }, {});

  return {
    contains: function(n, k, min) {
      return data.hasOwnProperty(getKeyForCacheEntry(n, k, min));
    },
    put: function(n, k, min, numbers) {
      if (!this.contains(n, k, min)) {
        data[getKeyForCacheEntry(n, k, min)] = numbers;
      }
    },
    get: function(n, k, min) {
      return this.contains(n, k, min)
        ? data[getKeyForCacheEntry(n, k, min)]
        : [];
    }
  }
};

module.exports = {
  findAll
};
