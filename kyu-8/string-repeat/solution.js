const createFilledArray = (size, elementProvider) => {
  return Array.from(new Array(size), elementProvider);
};

const repeatString = (n, s) => {
  if (s === null || s === undefined) {
    return s;
  }
  return createFilledArray(n, () => s).join('');
};

module.exports = {
  repeatString
};
