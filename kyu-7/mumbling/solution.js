const accum = (s) => {
  if (s === null || s === undefined) {
    return s;
  }
  return s.split('')
    .map((letter) => [letter.toUpperCase(), letter.toLowerCase()])
    .map(([uppercase, lowercase], index) => uppercase + lowercase.repeat(index))
    .join('-');
}

module.exports = {
  accum
};
