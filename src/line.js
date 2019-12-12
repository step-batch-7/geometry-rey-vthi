class Line {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return "{ 'x' : " + this.x + "," + "'y' : " + this.y + "}";
  }
  isEqual(other) {
    return other.x == this.x && other.y == this.y;
  }
}

module.exports = Line;
