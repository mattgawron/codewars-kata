const solution = require('./solution');

describe('solve', () => {
  it('should return 7 for \'1341\'', () => {
    expect(solution.solve('1341')).toBe(7);
  });
  it('should return 1 for \'1\'', () => {
    expect(solution.solve('1')).toBe(1);
  });
  it('should return 0 for \'\'', () => {
    expect(solution.solve('')).toBe(0);
  });
  it('should return 1 for \'12\'', () => {
    expect(solution.solve('12')).toBe(1);
  });
  it('should return 2 for \'21\'', () => {
    expect(solution.solve('21')).toBe(2);
  });
  it('should return 10 for \'1357\'', () => {
    expect(solution.solve('1357')).toBe(10);
  });
  it('should return 12 for \'13471\'', () => {
    expect(solution.solve('13471')).toBe(12);
  });
  it('should return 13 for \'134721\'', () => {
    expect(solution.solve('134721')).toBe(13);
  });
  it('should return 20 for \'1347231\'', () => {
    expect(solution.solve('1347231')).toBe(20);
  });
  it('should return 28 for \'13472315\'', () => {
    expect(solution.solve('13472315')).toBe(28);
  });
});
