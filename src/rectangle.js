const findLengthAndWidth = function(diagonalEndA, diagonalEndB) {
  const length = diagonalEndA.x - diagonalEndB.x;
  const width = diagonalEndA.y - diagonalEndB.y;
  return [length, width];
};

class Rectangle {
  #length;
  #width;
  constructor(diagonalEndA, diagonalEndB) {
    this.diagonalEndA = { x: diagonalEndA.x, y: diagonalEndA.y };
    this.diagonalEndB = { x: diagonalEndB.x, y: diagonalEndB.y };
  }
  toString() {
    return `[Rectangle (${this.diagonalEndA.x},${this.diagonalEndA.y}) to (${this.diagonalEndB.x},${this.diagonalEndB.y})]`;
  }

  get length() {
    return Math.abs(this.diagonalEndA.x - this.diagonalEndB.x);
  }
  get width() {
    return Math.abs(this.diagonalEndA.y - this.diagonalEndB.y);
  }
  get area() {
    return this.length * this.width;
  }

  get perimeter() {
    return 2 * (this.length + this.width);
  }
  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return (
      (this.diagonalEndA.x === other.diagonalEndA.x &&
        this.diagonalEndB.y === other.diagonalEndB.y) ||
      (this.diagonalEndA.x === other.diagonalEndB.x &&
        this.diagonalEndB.y === other.diagonalEndA.y)
    );
  }
}

module.exports = Rectangle;
