const arePointsEqual = function(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};

const slope = function(endA, endB) {
  const numerator = endB.y - endA.y;
  const denominator = endB.x - endA.x;
  return numerator / denominator;
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
    const value1 = Math.abs(this.endA.x - this.endB.x);
    const value2 = Math.abs(this.endA.y - this.endB.y);
    const length = Math.sqrt(value1 * value1 + value2 * value2);
    return length;
  }

  get slope() {
    const numerator = this.endB.y - this.endA.y;
    const denominator = this.endB.x - this.endA.x;
    return numerator / denominator;
  }

  isParallelTo(other) {
    const lineSlope = this.slope;
    const otherSlope = slope(other.endA, other.endB);
    return lineSlope === otherSlope;
  }
}

module.exports = Line;
