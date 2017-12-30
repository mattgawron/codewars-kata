const solution = require('./solution');

describe('createPhoneNumber', () => {
  it('should create correct phone number', () => {
    const args = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    expect(solution.createPhoneNumber(args)).toBe('(123) 456-7890');
  });
});
