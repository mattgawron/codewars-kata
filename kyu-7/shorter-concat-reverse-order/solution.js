const shorter_reverse_longer = (a, b) => {
  const [shorter, longer] = b.length > a.length ? [a, b] : [b, a];
  return shorter + reverse(longer) + shorter;
}

const reverse = (string) => {
  return string.split('')
    .reduce((result, symbol) => symbol + result, '');
}

module.exports = {
  shorter_reverse_longer
};
