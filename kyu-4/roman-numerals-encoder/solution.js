const solution = (number) => {
  const symbolMultipliers = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  };
  const decrementationSymbols = {
    'M': 'C',
    'D': 'C',
    'C': 'X',
    'L': 'X',
    'X': 'I',
    'V': 'I'
  };
  return number.split('')
    .reduce((result, symbol) => {
      if (result.lastSymbol === decrementationSymbols[symbol]) {
        result.encoded -= 2 * symbolMultipliers[result.lastSymbol];
      }
      result.encoded += symbolMultipliers[symbol];
      result.lastSymbol = symbol;
      return result;
    }, {encoded: 0, lastSymbol: ''})
    .encoded;
}

module.exports = {
  solution
};
