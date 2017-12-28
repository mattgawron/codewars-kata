const solution = require('./solution');

describe('repeatStr', () => {
  it('should return null when null provided', () => {
    expect(solution.repeatStr(1, null)).toBe(null);
  });
  it('should return undefined when undefined provided', () => {
    expect(solution.repeatStr(1, undefined)).toBe(undefined);
  });
  it('should return the same string for 1 repetition', () => {
    expect(solution.repeatStr(1, 'test')).toBe('test');
  });
  it('should return the duplicated string for 2 repetitions', () => {
    expect(solution.repeatStr(2, 'test')).toBe('testtest');
  });
  it('should properly handle empty string for multiple repetitions', () => {
    expect(solution.repeatStr(3, '')).toBe('');
  });
});
