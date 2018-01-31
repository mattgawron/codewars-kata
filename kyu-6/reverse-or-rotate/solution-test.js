const solution = require('./solution');

describe('revrot', () => {
  it(`should return '${expected}' for str = '${str}' and '${sz}'`, () => {
    const str = '123456987654';
    const sz = 6;
    const expected = '234561876549';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it(`should return '${expected}' for str = '${str}' and '${sz}'`, () => {
    const str = '123456987653';
    const sz = 6;
    const expected = '234561356789';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it(`should return '${expected}' for str = '${str}' and '${sz}'`, () => {
    const str = '66443875';
    const sz = 4;
    const expected = '44668753';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it(`should return '${expected}' for str = '${str}' and '${sz}'`, () => {
    const str = '66443875';
    const sz = 8;
    const expected = '64438756';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it(`should return '${expected}' for str = '${str}' and '${sz}'`, () => {
    const str = '664438769';
    const sz = 8;
    const expected = '67834466';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it(`should return '${expected}' for str = '${str}' and '${sz}'`, () => {
    const str = '123456779';
    const sz = 8;
    const expected = '23456771';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it(`should return '${expected}' for str = '${str}' and '${sz}'`, () => {
    const str = '';
    const sz = 8;
    const expected = '';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it(`should return '${expected}' for str = '${str}' and '${sz}'`, () => {
    const str = '123456779';
    const sz = 0;
    const expected = '';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it(`should return '${expected}' for str = '${str}' and '${sz}'`, () => {
    const str = '563000655734469485';
    const sz = 4;
    const expected = '0365065073456944';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
  it(`should return '${expected}' for str = '${str}' and '${sz}'`, () => {
    const str = '12345468024';
    const sz = 5;
    const expected = '2345120864';
    expect(solution.revrot(str, sz)).toBe(expected);
  });
});
