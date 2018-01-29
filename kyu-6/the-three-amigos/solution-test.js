const solution = require('./solution');

describe('threeAmigos', () => {
  it('should return [] for []', () => {
    expect(solution.threeAmigos([])).toEqual([]);
  });
  it('should return [] for [1, 2]', () => {
    expect(solution.threeAmigos([1, 2])).toEqual([]);
  });
  it('should return [] for [2, 4]', () => {
    expect(solution.threeAmigos([2, 4])).toEqual([]);
  });
  it('should return [] for [1, 2, 3]', () => {
    expect(solution.threeAmigos([1, 2, 3])).toEqual([]);
  });
  it('should return [2, 4, 6] for [2, 4, 6]', () => {
    expect(solution.threeAmigos([2, 4, 6])).toEqual([2, 4, 6]);
  });
  it('should return [2, 4, 6] for [2, 4, 6, 8]', () => {
    expect(solution.threeAmigos([2, 4, 6, 8])).toEqual([2, 4, 6]);
  });
  it('should return [9, 3, 7] for [1, 9, 3, 7]', () => {
    expect(solution.threeAmigos([1, 9, 3, 7])).toEqual([9, 3, 7]);
  });
});
