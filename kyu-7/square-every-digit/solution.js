const squareDigits = (num) => {
  return +num.toString()
    .split('')
    .map(number => +number)
    .map(number => Math.pow(number, 2))
    .reduce((result, number) => result + number, '');
}

module.exports = {
  squareDigits
};
