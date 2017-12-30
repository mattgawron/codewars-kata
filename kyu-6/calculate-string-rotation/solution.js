const shiftedDiff = (first, second) => {
  return second.concat(second).indexOf(first);
}

module.exports = {
  shiftedDiff
};
