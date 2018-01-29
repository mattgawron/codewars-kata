const solution = require('./solution');

describe('solution', () => {
  it('should return 0 for number = 0', () => {
    expect(solution.solution(0)).toBe(0);
  });
  it('should return 0 for number = 3', () => {
    expect(solution.solution(0)).toBe(0);
  });
  it('should return 3 for number = 4', () => {
    expect(solution.solution(3)).toBe(3);
  });
  it('should return 3 for number = 5', () => {
    expect(solution.solution(3)).toBe(3);
  });
  it('should return 8 for number = 6', () => {
    expect(solution.solution(8)).toBe(8);
  });
  it('should return 23 for number = 10', () => {
    expect(solution.solution(23)).toBe(23);
  });
});
