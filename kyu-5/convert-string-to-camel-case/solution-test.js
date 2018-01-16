const solution = require('./solution');

describe('toCamelCase', () => {
  it('should work for empty string', () => {
    expect(solution.toCamelCase('')).toBe('');
  });
  it('should work for single word starting with lowercase letter', () => {
    expect(solution.toCamelCase('dummy')).toBe('dummy');
  });
  it('should work for single word starting with lowercase letter', () => {
    expect(solution.toCamelCase('Dummy')).toBe('Dummy');
  });
  it('should convert string with underscore delimiter', () => {
    expect(solution.toCamelCase('two_words')).toBe('twoWords');
  });
  it('should convert string with dash delimiter', () => {
    expect(solution.toCamelCase('dash-example')).toBe('dashExample');
  });
  it('should convert string with dash and first uppercase letter', () => {
    expect(solution.toCamelCase('Uppercase-letter')).toBe('UppercaseLetter');
  });
  it('should convert string with underscore and first uppercase letter', () => {
    expect(solution.toCamelCase('Next_Example')).toBe('NextExample');
  });
  it('should convert string with mixed delimiters', () => {
    expect(solution.toCamelCase('it_Has-more_chars')).toBe('itHasMoreChars');
  });
});
