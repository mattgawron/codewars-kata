const solution = require('./solution');

describe('decipherThis', () => {
  it('should return \'Hello good day\' for \'72olle 103doo 100ya\'', () => {
    const encrypted = '72olle 103doo 100ya';
    const decrypted = 'Hello good day';
    expect(solution.decipherThis(encrypted)).toBe(decrypted);
  });
  it('should return \'Ready set go\' for \'82yade 115te 103o\'', () => {
    const encrypted = '82yade 115te 103o';
    const decrypted = 'Ready set go';
    expect(solution.decipherThis(encrypted)).toBe(decrypted);
  });
  it('should return \'Random test\' for \'\'', () => {
    const encrypted = '82mndoa 116tse';
    const decrypted = 'Random test';
    expect(solution.decipherThis(encrypted)).toBe(decrypted);
  });
});
