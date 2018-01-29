const solution = (number) => {
  const multiplesByThree = multiplesBy(number, 3);
  const multiplesByFive = multiplesBy(number, 5);
  const multiplesByFifteen = multiplesBy(number, 15);
  return multiplesByThree + multiplesByFive - multiplesByFifteen;
}

const multiplesBy = (number, divider) => {
  const greatestMultiplier = Math.floor((number - 1) / divider);
  return divider * greatestMultiplier * (greatestMultiplier + 1) / 2;
};

module.exports = {
  solution
};
