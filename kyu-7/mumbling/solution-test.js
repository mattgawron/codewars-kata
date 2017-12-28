const solution = require('./solution');

describe('accum', () => {
  it('should return the same value when null was passed', () => {
    expect(solution.accum(null)).toBe(null);
  });
  it('should return the same value when undefined was passed', () => {
    expect(solution.accum(undefined)).toBe(undefined);
  });
  it('should return empty string when empty string was provided', () => {
    expect(solution.accum('')).toBe('');
  });
  it('should properly work for single small letter', () => {
    expect(solution.accum('a')).toBe('A');
  });
  it('should properly work for single capital letter', () => {
    expect(solution.accum('A')).toBe('A');
  });
  it('should properly work for multiple same small letters', () => {
    expect(solution.accum('aaa')).toBe('A-Aa-Aaa');
  });
  it('should properly work for multiple same capital letters', () => {
    expect(solution.accum('AAA')).toBe('A-Aa-Aaa');
  });
  it('should properly work for multiple different small letters', () => {
    expect(solution.accum('abc')).toBe('A-Bb-Ccc');
  });
  it('should properly work for multiple different capital letters', () => {
    expect(solution.accum('ABC')).toBe('A-Bb-Ccc');
  });
  it('should properly work for mix of small and capital letters', () => {
    expect(solution.accum('aBcDeF')).toBe('A-Bb-Ccc-Dddd-Eeeee-Ffffff');
  });
});
