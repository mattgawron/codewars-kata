const solution = require('./solution');

describe('digital_root', () => {
  it('should return 7 for n = 16', () => {
    expect(solution.digital_root(16)).toBe(7);
  });
  it('should return 6 for n = 942', () => {
    expect(solution.digital_root(942)).toBe(6);
  });
  it('should return 6 for n = 132189', () => {
    expect(solution.digital_root(132189)).toBe(6);
  });
  it('should return 2 for n = 493193', () => {
    expect(solution.digital_root(493193)).toBe(2);
  });
});
