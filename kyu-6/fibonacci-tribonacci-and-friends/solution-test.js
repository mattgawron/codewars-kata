const solution = require('./solution');

describe('Xbonacci', () => {
  it('should work correctly for sequence = [0, 1] and n = 7', () => {
    expect(solution.Xbonacci([0, 1], 7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
  it('should work correctly for sequence = [1, 1] and n = 7', () => {
    expect(solution.Xbonacci([1, 1], 7)).toEqual([1, 1, 2, 3, 5, 8, 13]);
  });
  it('should work correctly for sequence = [0, 0, 1] and n = 7', () => {
    expect(solution.Xbonacci([0, 0, 1], 7)).toEqual([0, 0, 1, 1, 2, 4, 7]);
  });
  it('should work correctly for sequence = [1, 0, 0, 1] and n = 7', () => {
    expect(solution.Xbonacci([1, 0, 0, 1], 7)).toEqual([1, 0, 0, 1, 2, 3, 6]);
  });
  it('should work correctly for sequence = [1, 2, 3] and n = 5', () => {
    expect(solution.Xbonacci([1, 2, 3], 5)).toEqual([1, 2, 3, 6, 11]);
  });
});
