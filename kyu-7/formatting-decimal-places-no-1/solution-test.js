const solution = require('./solution');

describe('twoDecimalPlaces', () => {
  it('should return correct result for value with exactly 2 places', () => {
    expect(solution.twoDecimalPlaces(12.34)).toBe(12.34);
  });
  it('should return correct result for value with more than 2 places', () => {
    expect(solution.twoDecimalPlaces(3.456)).toBe(3.45);
  });
});
