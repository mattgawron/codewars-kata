const findAll = (n, k) => {
  const numbers = createGenerator().generate(n, k, 1);
  return numbers.length > 0
    ? [numbers.length, numbers[0], numbers[numbers.length - 1]]
    : [];
};

const rangeInclusive = (min, max) => {
  return min <= max
    ? Array.from(new Array(max - min + 1)).map((_, index) => min + index)
    : [];
};

const createGenerator = () => {
  const cache = createCache();
  return {
    generate: function(n, k, min) {
      if (cache.contains(n, k, min)) {
        return cache.get(n, k, min);
      }
      const numbers = rangeInclusive(min, Math.min(Math.floor(n / k), 9))
        .map(nextNumber => {
          const remainingSum = n - nextNumber;
          const remainingDigits = k - 1;
          const isNextSumBigEnough = remainingSum >= remainingDigits * nextNumber;
          const isNextSumSmallEnough = remainingSum <= 9 * remainingDigits;
          if (isNextSumBigEnough && isNextSumSmallEnough) {
            return this.generate(remainingSum, remainingDigits, nextNumber)
              .map(number => [nextNumber, ...number].join(''));
          } else {
            return [];
          }
        })
        .reduce((result, partialNumbers) => [...result, ...partialNumbers], []);
      cache.put(n, k, min, numbers);
      return numbers;
    }
  }
};

const createCache = () => {
  const getKeyForCacheEntry = (n, k, min) => `${n},${k},${min}`;
  const data = rangeInclusive(1, 9)
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
