const solution = require('./solution');

describe('ipsBetween', () => {
  it('should return 1 for the same IP passed as start and end', () => {
    expect(solution.ipsBetween('10.0.0.0', '10.0.0.0')).toBe(0);
  });
  it('should work correctly when difference is in last field', () => {
    expect(solution.ipsBetween('10.0.0.0', '10.0.0.20')).toBe(20);
  });
  it('should work correctly when difference is not in last field', () => {
    expect(solution.ipsBetween('10.0.0.0', '10.0.2.0')).toBe(512);
  });
  it('should work correctly when there are multiple different fields', () => {
    expect(solution.ipsBetween('10.0.0.0', '10.0.4.10')).toBe(1034);
  });
  it('should work correctly when second field value is higher', () => {
    expect(solution.ipsBetween('10.0.0.100', '10.0.1.0')).toBe(156);
  });
});
