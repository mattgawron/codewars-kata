const computeDepth = (x) => {
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let depth = 0;
  let number = 0;
  while (digits.length > 0) {
    number += x;
    ++depth;
    number.toString().split('')
      .forEach(digit => removeElementFromArray(digits, digit));
  }
  return depth;
}

const removeElementFromArray = (array, element) => {
  const elementIndex = array.indexOf(element);
  if (elementIndex > -1) {
    array.splice(elementIndex, 1);
  }
};

module.exports = {
  computeDepth
};
