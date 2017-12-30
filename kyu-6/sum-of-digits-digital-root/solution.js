const digital_root = (n) => {
  let result = n;
  while (result >= 10) {
    result = getDigitSum(result);
  }
  return result;
}

const getDigitSum = (n) => {
  return n.toString()
    .split('')
    .map(digit => +digit)
    .reduce((sum, digit) => sum + digit, 0);
};

module.exports = {
  digital_root
};
