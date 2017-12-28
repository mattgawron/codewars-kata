const solution = require('./solution');

describe('squareDigits', () => {
  it('should return correct result for 1', () => {
    expect(solution.squareDigits(1)).toBe(1);
  });
  it('should return correct result for 5', () => {
    expect(solution.squareDigits(5)).toBe(25);
  });
  it('should return correct result for 11', () => {
    expect(solution.squareDigits(11)).toBe(11);
  });
  it('should return correct result for 15', () => {
    expect(solution.squareDigits(15)).toBe(125);
  });
  it('should return correct result for 51', () => {
    expect(solution.squareDigits(51)).toBe(251);
  });
  it('should return correct result for 56', () => {
    expect(solution.squareDigits(56)).toBe(2536);
  });
});
