const solution = require('./solution');

describe('mix', () => {
  it('should return correct result for test case number 1', () => {
    const first = 'A aaaa bb c';
    const second = '& aaa bbb c d';
    const result = '1:aaaa/2:bbb';
    expect(solution.mix(first, second)).toBe(result);
  });
  it('should return correct result for test case number 2', () => {
    const first = 'my&friend&Paul has heavy hats! &';
    const second = 'my friend John has many many friends &';
    const result = '2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss';
    expect(solution.mix(first, second)).toBe(result);
  });
  it('should return correct result for test case number 3', () => {
    const first = 'mmmmm m nnnnn y&friend&Paul has heavy hats! &';
    const second = 'my frie n d Joh n has ma n y ma n y frie n ds n&';
    const result = '1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss';
    expect(solution.mix(first, second)).toBe(result);
  });
  it('should return correct result for test case number 4', () => {
    const first = 'Are the kids at home? aaaaa fffff';
    const second = 'Yes they are here! aaaaa fffff';
    const result = '=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh';
    expect(solution.mix(first, second)).toBe(result);
  });
  it('should return correct result for test case number 5', () => {
    const first = 'Are they here';
    const second = 'yes, they are here';
    const result = '2:eeeee/2:yy/=:hh/=:rr';
    expect(solution.mix(first, second)).toBe(result);
  });
  it('should return correct result for test case number 6', () => {
    const first = 'looping is fun but dangerous';
    const second = 'less dangerous than coding';
    const result = '1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg';
    expect(solution.mix(first, second)).toBe(result);
  });
  it('should return correct result for test case number 7', () => {
    const first = ' In many languages';
    const second = ' there\'s a pair of functions';
    const result = '1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt';
    expect(solution.mix(first, second)).toBe(result);
  });
  it('should return correct result for test case number 8', () => {
    const first = 'Lords of the Fallen';
    const second = 'gamekult';
    const result = '1:ee/1:ll/1:oo';
    expect(solution.mix(first, second)).toBe(result);
  });
  it('should return correct result for test case number 9', () => {
    const first = 'codewars';
    const second = 'codewars';
    const result = '';
    expect(solution.mix(first, second)).toBe(result);
  });
  it('should return correct result for test case number 10', () => {
    const first = 'A generation must confront the looming';
    const second = 'codewarrs';
    const result = '1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr';
    expect(solution.mix(first, second)).toBe(result);
  });
});
