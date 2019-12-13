const isTwoPointsEqual = function(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = endA;
    this.endB = endB;
  }
  toString() {
    return `Line (${this.endA.x},${this.endA.y}) (${this.endB.x},${this.endB.y})`;
  }
  isEqualTo(other) {
    const isSameType = other instanceof Line;
    let isEqual = isTwoPointsEqual(this.endA, other.endA);
    isEqual = isEqual && isTwoPointsEqual(this.endB, other.endB);
    return isEqual && isSameType;
  }
}

module.exports = { Line: Line, isTwoPointsEqual: isTwoPointsEqual };
