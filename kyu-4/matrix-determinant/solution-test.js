const solution = require('./solution');

describe('determinant', () => {
  it('should return correct result for 1x1 matrix', () => {
    const matrix = [[1]];
    expect(solution.determinant(matrix)).toBe(1);
  });
  it('should return correct result for 2x2 matrix', () => {
    const matrix = [
      [1, 3],
      [2, 5]
    ];
    expect(solution.determinant(matrix)).toBe(-1);
  });
  it('should return correct result for 3x3 matrix', () => {
    const matrix = [
      [2,  5,  3],
      [1, -2, -1],
      [1,  3,  4]
    ];
    expect(solution.determinant(matrix)).toBe(-20);
  });
  it('should return correct result for 4x4 matrix', () => {
    const matrix = [
      [ 2, -2,  1, 4],
      [ 3,  4, -1, 2],
      [-1,  3,  1, 5],
      [ 1,  4,  2, 2]
    ];
    expect(solution.determinant(matrix)).toBe(-286);
  });
});
