const solution = require('./solution');

describe('minMax', () => {
  it('should return correct values for sorted array', () => {
    expect(solution.minMax([1, 2, 3])).toEqual([1, 3]);
  });
  it('should return correct values for array sorted in reverse order', () => {
    expect(solution.minMax([6, 5, 4])).toEqual([4, 6]);
  });
  it('should return correct values for unsorted array', () => {
    expect(solution.minMax([7, 4, 9, 11, 3, 6])).toEqual([3, 11]);
  });
  it('should return correct values when array has 1 element', () => {
    expect(solution.minMax([1])).toEqual([1, 1]);
  });
  it('should return correct values when array has duplicates', () => {
    expect(solution.minMax([1, 1, 1, 1])).toEqual([1, 1]);
  });
  it('should return correct values when there are many duplicates', () => {
    expect(solution.minMax([3, 3, 4, 4, 4, 1, 1, 2, 2, 2])).toEqual([1, 4]);
  });
  it('should return correct values when array has negative elements', () => {
    expect(solution.minMax([-3, -5, 1, 4, 2])).toEqual([-5, 4]);
  });
  it('should return correct values when all elements are negative ', () => {
    expect(solution.minMax([-6, -10, -3, -5, -7])).toEqual([-10, -3]);
  });
  it('should return correct values when array contains zero', () => {
    expect(solution.minMax([-5, -9, 0, 4, 2])).toEqual([-9, 4]);
  });
  it('should return correct values when zero is lower bound', () => {
    expect(solution.minMax([5, 0, 7, 1, 3])).toEqual([0, 7]);
  });
  it('should return correct values when zero is upper bound', () => {
    expect(solution.minMax([-5, -9, -1, 0, -6])).toEqual([-9, 0]);
  });
});
