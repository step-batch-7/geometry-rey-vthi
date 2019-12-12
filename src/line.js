class Line {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `Line (${this.x},${this.y})`;
  }
  isEqual(other) {
    return other.x == this.x && other.y == this.y;
  }
}

module.exports = Line;
