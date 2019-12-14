const arePointsEqual = function(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }
  toString() {
    return `Line (${this.endA.x},${this.endA.y}) (${this.endB.x},${this.endB.y})`;
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
    const numerator = this.endB.y - this.endA.y;
    const denominator = this.endB.x - this.endA.x;
    return numerator / denominator;
  }

  isParallelTo(other) {
    if (this === other) return false;
    return other instanceof Line && this.slope === other.slope;
  }
}

module.exports = Line;
