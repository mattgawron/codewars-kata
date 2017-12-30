const solution = require('./solution');

describe('shiftedDiff', () => {
  it('should return 1 for pair: "esampl" and "sample"', () => {
    expect(solution.shiftedDiff("esampl", "sample")).toBe(5);
  });
  it('should return 2 for pair: "stte" and "test"', () => {
    expect(solution.shiftedDiff("stte", "test")).toBe(2);
  });
  it('should return 0 for pair: "same" and "same"', () => {
    expect(solution.shiftedDiff("same", "same")).toBe(0);
  });
  it('should return -1 for pair: "not" and "rotated"', () => {
    expect(solution.shiftedDiff("not", "rotated")).toBe(-1);
  });
});
