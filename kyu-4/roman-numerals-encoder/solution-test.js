const solution = require('./solution');

describe('solution', () => {
  it('should return I for 1', () => {
    expect(solution.sample(1)).toBe('I');
  });
  it('should return V for 5', () => {
    expect(solution.sample(5)).toBe('V');
  });
  it('should return X for 10', () => {
    expect(solution.sample(10)).toBe('X');
  });
  it('should return L for 50', () => {
    expect(solution.sample(50)).toBe('L');
  });
  it('should return C for 100', () => {
    expect(solution.sample(100)).toBe('C');
  });
  it('should return D for 500', () => {
    expect(solution.sample(500)).toBe('D');
  });
  it('should return M for 1000', () => {
    expect(solution.sample(1000)).toBe('M');
  });
  it('should return III for 3', () => {
    expect(solution.sample(3)).toBe('III');
  });
  it('should return IV for 4', () => {
    expect(solution.sample(4)).toBe('IV');
  });
  it('should return IX for 9', () => {
    expect(solution.sample(9)).toBe('IX');
  });
  it('should return XIV for 14', () => {
    expect(solution.sample(14)).toBe('XIV');
  });
  it('should return XC for 90', () => {
    expect(solution.sample(90)).toBe('XC');
  });
  it('should return CXXIII for 123', () => {
    expect(solution.sample(123)).toBe('CXXIII');
  });
  it('should return CDXCVII for 497', () => {
    expect(solution.sample(497)).toBe('CDXCVII');
  });
  it('should return CMXCIX for 999', () => {
    expect(solution.sample(999)).toBe('CMXCIX');
  });
  it('should return MCCXXXIV for 1234', () => {
    expect(solution.sample(1234)).toBe('MCCXXXIV');
  });
});
