const accum = (s) => {
  if (s === null || s === undefined) {
    return s;
  }
  return s.split('')
    .map((letter, index) => {
      const letterLowercase = letter.toLowerCase();
      const letterUppercase = letter.toUpperCase();
      return letterUppercase + letterLowercase.repeat(index);
    })
    .join('-');
}

module.exports = {
  accum
};
