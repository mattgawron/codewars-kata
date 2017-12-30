const solution = require('./solution');

describe('hasTwoCubeSums', () => {
  it('should return true for n = 1729', () => {
    expect(solution.hasTwoCubeSums(1729)).toBe(true);
  });
  it('should return false for n = 42', () => {
    expect(solution.hasTwoCubeSums(42)).toBe(false);
  });
});
