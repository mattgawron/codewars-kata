const findSmallestInt = (args) => {
  return args.reduce((memo, value) => value < memo ? value : memo);
}

module.exports = {
  findSmallestInt
};
