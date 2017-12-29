const solution = require('./solution');

describe('shorter_reverse_longer', () => {
  it('should work for two empty strings', () => {
    expect(solution.shorter_reverse_longer('', '')).toBe('');
  });
  it('should return correct result if first string is empty', () => {
    expect(solution.shorter_reverse_longer('', 'second')).toBe('dnoces');
  });
  it('should return correct result if second string is empty', () => {
    expect(solution.shorter_reverse_longer('first', '')).toBe('tsrif');
  });
  it('should return correct result for two non-empty strings', () => {
    expect(solution.shorter_reverse_longer('two', 'strings')).toBe('twosgnirtstwo');
  });
  it('should return correct result for strings of equal length', () => {
    expect(solution.shorter_reverse_longer('one', 'two')).toBe('twoenotwo');
  });
});
