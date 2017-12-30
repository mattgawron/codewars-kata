const shiftedDiff = (first, second) => {
  if (first.length != second.length) {
    return -1;
  }
  return second.concat(second).indexOf(first);
}

module.exports = {
  shiftedDiff
};
