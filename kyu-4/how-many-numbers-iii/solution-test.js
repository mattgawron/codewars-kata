const solution = require('./solution');

describe('findAll', () => {
  it('should return correct result for n = 10, k = 3', () => {
    expect(solution.findAll(10, 3)).toEqual([8, '118', '334']);
  });
  it('should return correct result for n = 27, k = 3', () => {
    expect(solution.findAll(27, 3)).toEqual([1, '999', '999']);
  });
  it('should return correct result for n = 84, k = 4', () => {
    expect(solution.findAll(84, 4)).toEqual([]);
  });
  it('should return correct result for n = 35, k = 6', () => {
    expect(solution.findAll(35, 6)).toEqual([123, '116999', '566666']);
  });
  it('should return correct result for n = 4, k = 2', () => {
    expect(solution.findAll(4, 2)).toEqual([2, '13', '22']);
  });
});
