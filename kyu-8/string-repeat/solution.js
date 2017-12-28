const repeatString = (n, s) => {
  if (s === null || s === undefined) {
    return s;
  }
  return Array.from(new Array(n), () => s)
    .join('');
};

module.exports = {
  repeatString
};
