const Point = require("./point");

const getYIntercept = function(x, y, m) {
  return y - m * x;
};

const isPointIsInLine = function(endPoints, coordinate) {
  const [endA, endB] = endPoints.sort();
  return coordinate >= endA && coordinate <= endB;
};

const arePointsCollinear = function(point1, point2, point3) {
  return (
    (point2.y - point1.y) * (point3.x - point2.x) ===
    (point3.y - point2.y) * (point2.x - point1.x)
  );
};

class Line {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
  }

  toString() {
    return `[Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }

  isEqualTo(other) {
    return (
      (this.endA.isEqualTo(other.endA) && this.endB.isEqualTo(other.endB)) ||
      (this.endA.isEqualTo(other.endB) && this.endB.isEqualTo(other.endA))
    );
  }

  get length() {
    return this.endA.findDistanceTo(this.endB);
  }

  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }

  isParallelTo(other) {
    if (this === other || !(other instanceof Line)) return false;
    if (arePointsCollinear(this.endA, this.endB, other.endA)) return false;
    return this.slope === other.slope;
  }

  findX(y) {
    if (!isPointIsInLine([this.endA.y, this.endB.y], y)) return NaN;
    if (this.slope === 0) return this.endA.x;
    return (y - this.endA.y) / this.slope + this.endA.x;
  }

  findY(x) {
    if (!isPointIsInLine([this.endA.x, this.endB.x], x)) return NaN;
    if (this.slope === Infinity) return this.endA.y;
    const yIntercept = getYIntercept(this.endA.x, this.endA.y, this.slope);
    return this.slope * x + yIntercept;
  }

  split() {
    const midPointOfLine = {
      x: (this.endA.x + this.endB.x) / 2,
      y: (this.endA.y + this.endB.y) / 2
    };
    return [
      new Line(this.endA, midPointOfLine),
      new Line(midPointOfLine, this.endB)
    ];
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    return (
      isPointIsInLine([this.endA.x, this.endB.x], point.x) &&
      isPointIsInLine([this.endA.y, this.endB.y], point.y) &&
      arePointsCollinear(this.endA, this.endB, point)
    );
  }

  findPointFromStart(dt) {
    if (typeof dt != "number") return null;
    const ratio = dt / this.length;
    if (ratio > 1 || ratio < 0) return null;
    const x = (1 - ratio) * this.endA.x + ratio * this.endB.x;
    const y = (1 - ratio) * this.endA.y + ratio * this.endB.y;
    return new Point(x, y);
  }

  findPointFromEnd(dt) {
    return this.findPointFromStart(this.length - dt);
  }
}

module.exports = Line;
