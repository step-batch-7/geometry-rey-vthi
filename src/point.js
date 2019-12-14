class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }
  visit(action) {
    if (!typeof action === "function") return false;
    return action(this.x, this.y);
  }
}

module.exports = Point;
