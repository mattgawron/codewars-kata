const findShort = (s) => {
  if (!s.includes(' ')) {
    return s.length;
  }
  return s.split(' ')
    .map(word => word.length)
    .reduce((memo, length) => length < memo ? length : memo);
}

module.exports = {
  findShort
};
