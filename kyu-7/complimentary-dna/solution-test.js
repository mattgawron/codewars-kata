const solution = require('./solution');

describe('DNAStrand', () => {
  it('should return correct complimentary DNA for A', () => {
    expect(solution.DNAStrand('A')).toBe('T');
  });
  it('should return correct complimentary DNA for T', () => {
    expect(solution.DNAStrand('T')).toBe('A');
  });
  it('should return correct complimentary DNA for C', () => {
    expect(solution.DNAStrand('C')).toBe('G');
  });
  it('should return correct complimentary DNA for G', () => {
    expect(solution.DNAStrand('G')).toBe('C');
  });
  it('should return correct complimentary DNA for complex code', () => {
    expect(solution.DNAStrand('ATCG')).toBe('TAGC');
  });
});
