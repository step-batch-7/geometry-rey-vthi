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
    const value1 = Math.abs(this.endA.x - this.endB.x);
    const value2 = Math.abs(this.endA.y - this.endB.y);
    const length = Math.sqrt(value1 * value1 + value2 * value2);
    return length;
  }
}

module.exports = Line;
