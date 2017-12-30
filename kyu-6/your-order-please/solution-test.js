const solution = require('./solution');

describe('order', () => {
  it('should work properly for empty string', () => {
    expect(solution.order('')).toBe('');
  });
  it('should work properly for string single word', () => {
    expect(solution.order('sin1gle')).toBe('sin1gle');
  });
  it('should work properly for sorted list of words', () => {
    expect(solution.order('o1ne tw2o thr3ee')).toBe('o1ne tw2o thr3ee');
  });
  it('should work properly for list of words sorted reversly', () => {
    expect(solution.order('thr3ee tw2o o1ne')).toBe('o1ne tw2o thr3ee');
  });
  it('should work properly for list of words sorted randomly', () => {
    expect(solution.order('m3y thi1s li4st i2s')).toBe('thi1s i2s m3y li4st');
  });
});
