const solution = require('./solution');

describe('dirReduc', () => {
  it('should return the same direction for single direction', () => {
    expect(solution.dirReduc(['NORTH'])).toEqual(['NORTH']);
  });
  it('should remove one pair of opposite directions', () => {
    expect(solution.dirReduc(['NORTH', 'SOUTH'])).toEqual([]);
  });
  it('should remove two pairs, but no element in between', () => {
    expect(solution.dirReduc(['WEST', 'EAST', 'EAST', 'NORTH', 'SOUTH']))
      .toEqual(['EAST']);
  });
  it('should leave elements when pair in between is removed', () => {
    expect(solution.dirReduc(['NORTH', 'EAST', 'WEST', 'NORTH']))
      .toEqual(['NORTH', 'NORTH']);
  });
  it('should remove two subsequent pairs', () => {
    expect(solution.dirReduc(['NORTH', 'SOUTH', 'WEST', 'EAST'])).toEqual([]);
  });
  it('should remove pairs regardless of order in pair', () => {
    expect(solution.dirReduc(['WEST', 'EAST', 'EAST', 'WEST'])).toEqual([]);
  });
  it('should leave pairs when opposite directions are not neighbours', () => {
    expect(solution.dirReduc(['NORTH', 'EAST', 'SOUTH', 'WEST']))
      .toEqual(['NORTH', 'EAST', 'SOUTH', 'WEST']);
  });
  it('should remove pair when it is splitted by removed pair', () => {
    expect(solution.dirReduc(['NORTH', 'EAST', 'WEST', 'SOUTH']))
      .toEqual([]);
  });
});
