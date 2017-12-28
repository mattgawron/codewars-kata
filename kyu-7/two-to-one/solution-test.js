const solution = require('./solution');

describe('longest', () => {
  it('should return empty string for two empty strings', () => {
    expect(solution.longest('', '')).toBe('');
  });
  it('should return letters from first string when second is empty', () => {
    expect(solution.longest('test', '')).toBe('est');
  });
  it('should return letters from second string when first is empty', () => {
    expect(solution.longest('', 'test')).toBe('est');
  });
  it('should return unique letters when strings are the same', () => {
    expect(solution.longest('samestring', 'samestring')).toBe('aegimnrst');
  });
  it('should return all letters when strings have no common letters', () => {
    expect(solution.longest('aceg', 'bdfh')).toBe('abcdefgh');
  });
  it('should return letters without duplicates', () => {
    expect(solution.longest('five', 'life')).toBe('efilv');
  });
  it('should return correctly sorted letters', () => {
    expect(solution.longest('cba', 'zyx')).toBe('abcxyz');
  });
});
