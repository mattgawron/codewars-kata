const solution = require('./solution');

describe('computeDepth', () => {
  it('should return 10 for x = 1', () => {
    expect(solution.computeDepth(1)).toBe(10);
  });589
  it('should return 9 for x = 42', () => {
    expect(solution.computeDepth(42)).toBe(9);
  });
  it('should return 13 for x = 12', () => {
    expect(solution.computeDepth(12)).toBe(13);
  });
  it('should return 9 for x = 21', () => {
    expect(solution.computeDepth(21)).toBe(9);
  });
  it('should return 9 for x = 123', () => {
    expect(solution.computeDepth(123).toBe(9);
  });
});
