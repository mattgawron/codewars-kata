const solution = require('./solution');

describe('findOdd', () => {
  it('should work properly for array with one element', () => {
    expect(solution.findOdd([1])).toBe(1);
  });
  it('should work properly when result is odd number', () => {
    expect(solution.findOdd([2, 3, 2])).toBe(3);
  });
  it('should work properly when result is even number', () => {
    expect(solution.findOdd([4, 5, 5])).toBe(4);
  });
  it('should work properly for negative numbers', () => {
    expect(solution.findOdd([1, 5, -3, 2, -6, 2, 1, -6, 5])).toBe(-3);
  });
  it('should work properly when result is zero', () => {
    expect(solution.findOdd([4, 0, -1, 4, 3, -1, 3])).toBe(0);
  });
});
