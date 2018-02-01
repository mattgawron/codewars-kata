const solve = (s) => {
  return s.split('')
    .reduce((sum, element, index) => {
      if (element % 2 === 1) {
        sum += index + 1;
      }
      return sum;
    }, 0);
};

module.exports = {
  solve
};
