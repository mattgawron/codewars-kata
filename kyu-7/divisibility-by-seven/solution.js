const seven = (m) => {
  let step = 0;
  while (m >= 100) {
    m = iterate(m);
    ++step;
  }
  return [m, step];
}

const iterate = (m) => {
  const y = m % 10;
  const x = (m - y) / 10;
  return x - 2*y;
}

module.exports = {
  seven
};
