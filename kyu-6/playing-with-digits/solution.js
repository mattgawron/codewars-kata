const digPow = (n, p) => {
  const digitPowersSum = n.toString()
    .split('')
    .map(digit => +digit)
    .reduce(getDigitPowersSumReductor(p), 0);
  return digitPowersSum % n === 0 ? digitPowersSum / n : -1;
}

const getDigitPowersSumReductor = (p) => {
  return (result, digit, index) => result + Math.pow(digit, index + p);
};

module.exports = {
  digPow
};
