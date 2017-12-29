const solution = require('./solution');

describe('wheresWally', () => {
  it('should return -1 for empty string', () => {
    expect(solution.wheresWally('')).toBe(-1);
  });
  it('should return -1 when Wally was not found', () => {
    expect(solution.wheresWally('No expected string here')).toBe(-1);
  });
  it('should return 0 when sentence starts with word Wally', () => {
    expect(solution.wheresWally('Wally is here!')).toBe(0);
  });
  it('should return correct index when Wally is inside string', () => {
    expect(solution.wheresWally('Here Wally is inside')).toBe(5);
  });
  it('should return -1 when Wally is part of other word', () => {
    expect(solution.wheresWally('Multi-Wally does not work')).toBe(-1);
  });
  it('should return -1 when Wally does not start with capital letter', () => {
    expect(solution.wheresWally('Name wally should start with W')).toBe(-1);
  });
  it('should return correct index when Wally ends with full stop', () => {
    expect(solution.wheresWally('Correct sentence with Wally.')).toBe(22);
  });
  it('should return correct index when Wally ends with comma', () => {
    expect(solution.wheresWally('Wally, where are you?')).toBe(0);
  });
  it('should return index of first Wally occurrence', () => {
    expect(solution.wheresWally('First Wally and second Wally')).toBe(6);
  });
  it('should return -1 when Wally starts with special character', () => {
    expect(solution.wheresWally('\'Wally')).toBe(-1);
  });
  it('should return correct index for Wally\'s', () => {
    expect(solution.wheresWally('Simple Wally\'s test')).toBe(7);
  });
  it('should return correct index when Wally\'s ends with comma', () => {
    expect(solution.wheresWally('It\'s Wally\'s.')).toBe(5);
  });
});
