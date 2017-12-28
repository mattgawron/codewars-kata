const solution = require('./solution');

describe('repeatString', () => {
  it('should return null when null provided', () => {
    expect(solution.repeatString(1, null)).toBe(null);
  });
  it('should return undefined when undefined provided', () => {
    expect(solution.repeatString(1, undefined)).toBe(undefined);
  });
  it('should return the same string for 1 repetition', () => {
    expect(solution.repeatString(1, 'test')).toBe('test');
  });
  it('should return the duplicated string for 2 repetitions', () => {
    expect(solution.repeatString(2, 'test')).toBe('testtest');
  });
  it('should properly handle empty string for multiple repetitions', () => {
    expect(solution.repeatString(3, '')).toBe('');
  });
});
