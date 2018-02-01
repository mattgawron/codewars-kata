const solution = require('./solution');

describe('recover', () => {
  it('should return \'1\' for \'NEO\'', () => {
    expect(solution.recover('NEO')).toBe('1');
  });
  it('should return \'12\' for \'ONETWO\'', () => {
    expect(solution.recover('ONETWO')).toBe('12');
  });
  it('should return \'21\' for \'TWWTONE\'', () => {
    expect(solution.recover('TWWTONE')).toBe('21');
  });
  it('should return \'No digits found\' for \'ZYX\'', () => {
    expect(solution.recover('ZYX')).toBe('No digits found');
  });
  it('should return \'11\' for \'ONENO\'', () => {
    expect(solution.recover('ONENO')).toBe('11');
  });
  it('should return \'12219827\' for \'NEOTWONEINEIGHTOWSVEEN\'', () => {
    expect(solution.recover('NEOTWONEINEIGHTOWSVEEN')).toBe('12219827');
  });
  it('should return \'12\' for \'ENOWT\'', () => {
    expect(solution.recover('ENOWT')).toBe('12');
  });
  it('should return \'135\' for \'ONETHREFVIX\'', () => {
    expect(solution.recover('ONETHREFVIX')).toBe('135');
  });
});
