const solution = require('./solution');

const width = 2;
const length = 3;
const height = 6;
const data = [width, length, height];
const block = new solution.Block(data);

describe('getWidth', () => {
  it('should return correct width', () => {
    expect(block.getWidth()).toBe(2);
  });
});
describe('getLength', () => {
  it('should return correct length', () => {
    expect(block.getLength()).toBe(3);
  });
});
describe('getHeight', () => {
  it('should return correct height', () => {
    expect(block.getHeight()).toBe(5);
  });
});
describe('getVolume', () => {
  it('should return correct volume', () => {
    expect(block.getVolume()).toBe(30);
  });
});
describe('getSurfaceArea', () => {
  it('should return correct surface area', () => {
    expect(block.getSurfaceArea()).toBe(62);
  });
});
