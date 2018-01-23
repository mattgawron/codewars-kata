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
  let numbers = [];
  for (let nextNumber = min; nextNumber < 10; ++nextNumber) {
    const nextDigitSum = n - nextNumber;
    const remainingDigits = k - 1;
    const isNextSumBigEnough = nextDigitSum >= remainingDigits * nextNumber;
    const isNextSumSmallEnough = nextDigitSum <= 9 * remainingDigits;
    if (isNextSumBigEnough && isNextSumSmallEnough) {
      numbers = [
        ...numbers,
        ...generateNumbers(nextDigitSum, remainingDigits, nextNumber)
          .map(number => [nextNumber, ...number].join(''))
      ];
    }
  }
  console.log(`(II) n = ${n}, k = ${k}, min = ${min}`)
  return numbers;
};

module.exports = {
  findAll
};
