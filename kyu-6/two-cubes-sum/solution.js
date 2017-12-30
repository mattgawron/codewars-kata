const hasTwoCubeSums = (n) => {
  let upperBound = Math.ceil(Math.pow(n, 1/3))
  let foundPairs = 0;
  for (let firstNumber = 1; firstNumber < upperBound; ++firstNumber) {
    const secondNumber = Math.pow(n - Math.pow(firstNumber, 3), 1/3);
    const secondNumberRounded = Math.round(secondNumber);
    if (Math.pow(firstNumber, 3) + Math.pow(secondNumberRounded, 3) === n) {
      ++foundPairs;
      if (foundPairs === 2) {
        return true;
      } else {
        upperBound = secondNumberRounded;
      }
    }
  }
  return false;
}

module.exports = {
  hasTwoCubeSums
};
