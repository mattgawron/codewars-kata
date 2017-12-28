const solution = require('./solution');

describe('seven', () => {
  it('should return same number and 0 steps for one digit number', () => {
    expect(solution.seven(1)).toEqual([1, 0]);
  });
  it('should return same number and 0 steps for two digit number', () => {
    expect(solution.seven(12)).toEqual([12, 0]);
  });
  it('should return correct result and 1 step for three digit number', () => {
    expect(solution.seven(123)).toEqual([6, 1]);
  });
  it('should return correct result and 2 steps for four digit number', () => {
    expect(solution.seven(1234)).toEqual([1, 2]);
  });
  it('should return correct result and 3 steps for five digit number', () => {
    expect(solution.seven(12345)).toEqual([3, 3]);
  });
});
