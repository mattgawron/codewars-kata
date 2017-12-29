const solution = require('./solution');

describe('digPow', () => {
  it('should return k = 1 for input n = 89, p = 1', () => {
    expect(solution.digPow(89, 1)).toBe(1);
  });
  it('should return k = 1 for input n = 695, p = 2', () => {
    expect(solution.digPow(695, 2)).toBe(2);
  });
  it('should return k = 1 for input n = 46288, p = 3', () => {
    expect(solution.digPow(46288, 3)).toBe(51);
  });
  it('should return no result flag (-1) for input n = 92, p = 1', () => {
    expect(solution.digPow(92, 1)).toBe(-1);
  });
});
