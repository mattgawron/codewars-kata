const solution = require('./solution');

describe('revrot', () => {
  it('should work correctly for str = \'123456987654\' and sz = 6', () => {
    const str = '123456987654';
    const sz = 6;
    const expected = '234561876549';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it('should work correctly for str = \'123456987653\' and sz = 6', () => {
    const str = '123456987653';
    const sz = 6;
    const expected = '234561356789';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it('should work correctly for str = \'66443875\' and sz = 4', () => {
    const str = '66443875';
    const sz = 4;
    const expected = '44668753';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it('should work correctly for str = \'66443875\' and sz = 8', () => {
    const str = '66443875';
    const sz = 8;
    const expected = '64438756';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it('should work correctly for str = \'664438769\' and sz = 8', () => {
    const str = '664438769';
    const sz = 8;
    const expected = '67834466';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it('should work correctly for str = \'123456779\' and sz = 8', () => {
    const str = '123456779';
    const sz = 8;
    const expected = '23456771';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it('should work correctly for str = \'\' and sz = 8', () => {
    const str = '';
    const sz = 8;
    const expected = '';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it('should work correctly for str = \'123456779\' and sz = 0', () => {
    const str = '123456779';
    const sz = 0;
    const expected = '';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it('should work correctly for str = \'563000655734469485\' and sz = 4', () => {
    const str = '563000655734469485';
    const sz = 4;
    const expected = '0365065073456944';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it('should work correctly for str = \'12345468024\' and sz = 5', () => {
    const str = '12345468024';
    const sz = 5;
    const expected = '2345120864';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
});
