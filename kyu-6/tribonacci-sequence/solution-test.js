const solution = require('./solution');

describe('tribonacci', () => {
  it('should work correctly for signature = [0, 0, 0] and n = 5', () => {
    expect(solution.tribonacci([0, 0, 0], 5)).toBe([0, 0, 0, 0, 0]);
  });
  it('should work correctly for signature = [0, 0, 1] and n = 7', () => {
    expect(solution.tribonacci([0, 0, 1], 7)).toBe([0, 0, 1, 1, 2, 4, 7]);
  });
  it('should work correctly for signature = [0, 1, 1] and n = 5', () => {
    expect(solution.tribonacci([0, 1, 1], 5)).toBe([0, 1, 1, 2, 4]);
  });
  it('should work correctly for signature = [1, 0, 1] and n = 4', () => {
    expect(solution.tribonacci([1, 0, 1], 4)).toBe([1, 0, 1, 2]);
  });
  it('should work correctly for signature = [1, 1, 1] and n = 3', () => {
    expect(solution.tribonacci([1, 1, 1], 3)).toBe([1, 1, 1]);
  });
  it('should work correctly for signature = [1, 2, 3] and n = 5', () => {
    expect(solution.tribonacci([1, 2, 3], 5)).toBe([1, 2, 3, 6, 11]);
  });
  it('should work correctly for signature = [2, 1, 3] and n = 2', () => {
    expect(solution.tribonacci([2, 1, 3], 2)).toBe([2, 1]);
  });
});
