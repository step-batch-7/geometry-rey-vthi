const isTwoPointsEqual = function(point1, point2) {
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
    const isBothLine = other instanceof Line;
    const isEqualEndA = isTwoPointsEqual(this.endA, other.endA);
    const isEqualEndB = isTwoPointsEqual(this.endB, other.endB);
    return isEqualEndA && isEqualEndB && isBothLine;
  }
}

module.exports = { Line: Line, isTwoPointsEqual: isTwoPointsEqual };
