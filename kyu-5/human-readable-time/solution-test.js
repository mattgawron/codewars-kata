const solution = require('./solution');

describe('humanReadable', () => {
  it('should work correctly for 00:00:00', () => {
    expect(solution.humanReadable(0)).toBe('00:00:00');
  });
  it('should work correctly for 00:00:59', () => {
    expect(solution.humanReadable(59)).toBe('00:00:59');
  });
  it('should work correctly for 00:01:00', () => {
    expect(solution.humanReadable(60)).toBe('00:01:00');
  });
  it('should work correctly for 00:01:10', () => {
    expect(solution.humanReadable(70)).toBe('00:01:10');
  });
  it('should work correctly for 00:59:59', () => {
    expect(solution.humanReadable(3599)).toBe('00:59:59');
  });
  it('should work correctly for 01:00:00', () => {
    expect(solution.humanReadable(3600)).toBe('01:00:00');
  });
  it('should work correctly for 01:00:59', () => {
    expect(solution.humanReadable(3659)).toBe('01:00:59');
  });
  it('should work correctly for 01:01:00', () => {
    expect(solution.humanReadable(3660)).toBe('01:01:00');
  });
  it('should work correctly for 01:01:10', () => {
    expect(solution.humanReadable(3670)).toBe('01:01:10');
  });
});
