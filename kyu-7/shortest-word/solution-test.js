const solution = require('./solution');

describe('findShort', () => {
  it('should return lenght of word, when single word was provided', () => {
    expect(solution.findShort('word')).toBe(4);
  });
  it('should return correct lenght, when words have the same length', () => {
    expect(solution.findShort('test word')).toBe(4);
  });
  it('should return correct length for words of different length', () => {
    expect(solution.findShort('simple sentence of words')).toBe(2);
  });
  it('should return correct length for one letter word', () => {
    expect(solution.findShort('this is a sentence')).toBe(1);
  });
});
