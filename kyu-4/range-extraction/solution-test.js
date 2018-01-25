const solution = require('./solution');

describe('solution', () => {
  it('should return empty string for empty list', () => {
    expect(solution.solution([])).toEqual("");
  });
  it('should return "1,2" for [1, 2]', () => {
    expect(solution.solution([1, 2])).toEqual('1,2');
  });
  it('should return "1-3" for [1, 2, 3]', () => {
    expect(solution.solution([1, 2, 3])).toEqual('1-3');
  });
  it('should return "-4--2,3,4" for [-4, -3, -2, 3, 4]', () => {
    expect(solution.solution([-4, -3, -2, 3, 4])).toEqual('-4--2,3,4');
  });
  it('should return "-6,-5,3-7" for [-6, -5, 3, 4, 5, 6, 7]', () => {
    expect(solution.solution([-6, -5, 3, 4, 5, 6, 7])).toEqual('-6,-5,3-7');
  });
  it('should return "1-4,8-11" for [1, 2, 3, 4, 8, 9, 10, 11]', () => {
    expect(solution.solution([1, 2, 3, 4, 8, 9, 10, 11])).toEqual('1-4,8-11');
  });
});
