const arePointsEqual = function(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};
const getYIntercept = function(x, y, m) {
  return y - m * x;
};

const isPointIsInLine = function(endPoints, coordinate) {
  const [endA, endB] = endPoints.sort();
  return coordinate >= endA && coordinate <= endB;
};
class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }
  toString() {
    return `[Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }
  isEqualTo(other) {
    return (
      other instanceof Line &&
      arePointsEqual(this.endA, other.endA) &&
      arePointsEqual(this.endB, other.endB)
    );
  }

  get length() {
    const x = Math.abs(this.endA.x - this.endB.x);
    const y = Math.abs(this.endA.y - this.endB.y);
    return Math.sqrt(x * x + y * y);
    r;
  }

  get slope() {
    const dy = this.endB.y - this.endA.y;
    const dx = this.endB.x - this.endA.x;
    return dy / dx;
  }

  isParallelTo(other) {
    if (this === other) return false;
    return other instanceof Line && this.slope === other.slope;
  }

  findX(y) {
    if (!isPointIsInLine([this.endA.y, this.endB.y], y)) return NaN;
    if (this.slope === 0) return this.endA.y;
    const yIntercept = getYIntercept(this.endA.x, this.endA.y, this.slope);
    return (y - yIntercept) / this.slope;
  }

  findY(x) {
    if (!isPointIsInLine([this.endA.x, this.endB.x], x)) return NaN;
    if (this.slope === 0) return this.endA.y;
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
    return (
      isPointIsInLine([this.endA.x, this.endB.x], point.x) ||
      isPointIsInLine([this.endA.x, this.endB.x], point.y)
    );
  }
}

module.exports = Line;
