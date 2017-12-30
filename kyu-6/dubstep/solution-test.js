const solution = require('./solution');

describe('songDecoder', () => {
  it('should work correctly when result is empty string', () => {
    expect(solution.songDecoder('WUBWUBWUB')).toBe('');
  });
  it('should work correctly for one word', () => {
    expect(solution.songDecoder('word')).toBe('word');
  });
  it('should work correctly for one word preceeded by WUBs', () => {
    expect(solution.songDecoder('WUBWUBtest')).toBe('test');
  });
  it('should work correctly for one word followed by WUB', () => {
    expect(solution.songDecoder('sampleWUB')).toBe('sample');
  });
  it('should work correctly for word in between WUBs', () => {
    expect(solution.songDecoder('WUBbetweenWUBWUB')).toBe('between');
  });
  it('should work correctly for multiple words without WUBs at ends', () => {
    expect(solution.songDecoder('aWUBbWUBWUBc')).toBe('a b c');
  });
  it('should work correctly for multiple words with WUBs at ends', () => {
    expect(solution.songDecoder('WUBWUBaWUBWUBbWUB')).toBe('a b');
  });
});
