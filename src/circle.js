const Point = require("./point");

class Circle {
  constructor(point, radius) {
    this.point = new Point(point.x, point.y);
    this.radius = radius;
  }
  toString() {
    return `[Circle @(${this.point.x}, ${this.point.y}) radius ${this.radius}]`;
  }
  isEqualTo(other) {
    return this.point.isEqualTo(other.point) && this.radius === other.radius;
  }
}

module.exports = Circle;
