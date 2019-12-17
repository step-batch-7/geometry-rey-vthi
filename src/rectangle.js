class Rectangle {
  constructor(diagonalEndA, diagonalEndB) {
    this.diagonalEndA = { x: diagonalEndA.x, y: diagonalEndA.y };
    this.diagonalEndB = { x: diagonalEndB.x, y: diagonalEndB.y };
  }
  toString() {
    return `[Rectangle (${this.diagonalEndA.x},${this.diagonalEndA.y}) to (${this.diagonalEndB.x},${this.diagonalEndB.y})]`;
  }
}

module.exports = Rectangle;
