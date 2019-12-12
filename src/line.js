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
    let isEqual = isTwoPointsEqual(this.endA, other.endA);
    return isEqual && isTwoPointsEqual(this.endB, other.endB);
  }
}

module.exports = Line;
