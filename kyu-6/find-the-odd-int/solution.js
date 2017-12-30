const findOdd = (A) => {
  return A.reduce((result, value) => result ^ value);
}

module.exports = {
  findOdd
};
