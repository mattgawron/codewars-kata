const DNAStrand = (dna) => {
  const mappedSymbols = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  };
  return dna.split('')
    .map(symbol => mappedSymbols[symbol])
    .join('');
}

module.exports = {
  DNAStrand
};
