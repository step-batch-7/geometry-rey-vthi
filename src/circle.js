class Circle {
  constructor(point, radius) {
    this.point = { x: point.x, y: point.y };
    this.radius = radius;
  }
  toString() {
    return `[Circle @(${this.point.x}, ${this.point.y}) radius ${this.radius}]`;
  }
}

module.exports = Circle;
