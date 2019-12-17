const findLengthAndWidth = function(diagonalEndA, diagonalEndB) {
  const length = diagonalEndA.x - diagonalEndB.x;
  const width = diagonalEndA.y - diagonalEndB.y;
  return [length, width];
};

class Rectangle {
  constructor(diagonalEndA, diagonalEndB) {
    this.diagonalEndA = { x: diagonalEndA.x, y: diagonalEndA.y };
    this.diagonalEndB = { x: diagonalEndB.x, y: diagonalEndB.y };
  }
  toString() {
    return `[Rectangle (${this.diagonalEndA.x},${this.diagonalEndA.y}) to (${this.diagonalEndB.x},${this.diagonalEndB.y})]`;
  }

  get area() {
    const length = this.diagonalEndA.x - this.diagonalEndB.x;
    const width = this.diagonalEndA.y - this.diagonalEndB.y;
    return Math.abs(length * width);
  }
  get perimeter() {
    const length = this.diagonalEndA.x - this.diagonalEndB.x;
    const width = this.diagonalEndA.y - this.diagonalEndB.y;
    return 2 * Math.abs(length + width);
  }
}

module.exports = Rectangle;
