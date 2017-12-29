const Block = class Block {
  constructor(data) {
    [this.width, this.length, this.height] = data;
  }
  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getHeight() {
    return this.height;
  }
  getVolume() {
    return this.width * this.length * this.height;
  }
  getSurfaceArea() {
    const surfaceAreas = [
      2 * this.width * this.length,
      2 * this.width * this.height,
      2 * this.length * this.height
    ];
    return surfaceAreas.reduce((sum, value) => sum + value);
  }
}

module.exports = {
  Block
};
