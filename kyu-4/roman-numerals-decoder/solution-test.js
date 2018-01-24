const solution = require('./solution');

describe('solution', () => {
  it('should return 1 for I', () => {
    expect(solution.solution('I')).toBe(1);
  });
  it('should return 5 for V', () => {
    expect(solution.solution('V')).toBe(5);
  });
  it('should return 10 for X', () => {
    expect(solution.solution('X')).toBe(10);
  });
  it('should return 50 for L', () => {
    expect(solution.solution('L')).toBe(50);
  });
  it('should return 100 for C', () => {
    expect(solution.solution('C')).toBe(100);
  });
  it('should return 500 for D', () => {
    expect(solution.solution('D')).toBe(500);
  });
  it('should return 1000 for M', () => {
    expect(solution.solution('M')).toBe(1000);
  });
  it('should return 3 for III', () => {
    expect(solution.solution('III')).toBe(3);
  });
  it('should return 4 for IV', () => {
    expect(solution.solution('IV')).toBe(4);
  });
  it('should return 32 for XXXII', () => {
    expect(solution.solution('XXXII')).toBe(32);
  });
  it('should return 240 for CCXL', () => {
    expect(solution.solution('CCXL')).toBe(240);
  });
  it('should return 499 for CDXCIX', () => {
    expect(solution.solution('CDXCIX')).toBe(499);
  });
  it('should return MCCXXXIV for 1234', () => {
    expect(solution.solution('MCCXXXIV')).toBe(1234);
  });
});
