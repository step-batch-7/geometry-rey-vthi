const isTwoPointsEqual = function(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = { ...endA };
    this.endB = { ...endB };
  }
  toString() {
    return `Line (${this.endA.x},${this.endA.y}) (${this.endB.x},${this.endB.y})`;
  }
  isEqualTo(other) {
    return (
      other instanceof Line &&
      isTwoPointsEqual(this.endA, other.endA) &&
      isTwoPointsEqual(this.endB, other.endB)
    );
  }
}

module.exports = { Line: Line, isTwoPointsEqual: isTwoPointsEqual };
