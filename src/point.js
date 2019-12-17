class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `[Point @(${this.x}, ${this.y})]`;
  }
  visit(action) {
    return action(this.x, this.y);
  }
  isEqualTo(other) {
    return other instanceof Point && this.x === other.x && this.y === other.y;
  }
  clone() {
    return new Point(this.x, this.y);
  }
  findDistanceTo(other) {
    if (!(other instanceof Point)) return NaN;
    const x = other.x - this.x;
    const y = other.y - this.y;
    return Math.sqrt(x * x + y * y);
  }
  isOn(shape) {
    return shape.hasPoint(this);
  }
}

module.exports = Point;
