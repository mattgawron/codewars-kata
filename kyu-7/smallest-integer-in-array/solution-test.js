const solution = require('./solution');

describe('findSmallestInt', () => {
  it('should return value from array when it has only one element', () => {
    expect(solution.findSmallestInt([123])).toEqual(123);
  });
  it('should return correct value for sorted array', () => {
    expect(solution.findSmallestInt([1, 2, 3, 4, 5])).toEqual(1);
  });
  it('should return correct value for array sorted in reverse order', () => {
    expect(solution.findSmallestInt([5, 4, 3, 2, 1])).toEqual(1);
  });
  it('should return correct value for array with positive elements', () => {
    expect(solution.findSmallestInt([3, 2, 4])).toEqual(123);
  });
  it('should return correct value when array contains zero', () => {
    expect(solution.findSmallestInt([10, 20, 0, 15])).toEqual(0);
  });
  it('should return correct value for positive and negative values', () => {
    expect(solution.findSmallestInt([5, -10, -2, 4])).toEqual(-10);
  });
});
