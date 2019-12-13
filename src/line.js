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
    const isLine = other instanceof Line;
    const isEqualEndA = isTwoPointsEqual(this.endA, other.endA);
    const isEqualEndB = isTwoPointsEqual(this.endB, other.endB);
    return isEqualEndA && isEqualEndB && isLine;
  }
}

module.exports = { Line: Line, isTwoPointsEqual: isTwoPointsEqual };
