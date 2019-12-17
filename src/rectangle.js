const Point = require("./point");
const Line = require("./line");

class Rectangle {
  #vertexA;
  #vertexC;
  constructor(vertexB, vertexD) {
    this.vertexB = new Point(vertexB.x, vertexB.y);
    this.vertexD = new Point(vertexD.x, vertexD.y);
    this.#vertexC = new Point(vertexD.x, vertexB.y);
    this.#vertexA = new Point(vertexB.x, vertexD.y);
  }
  toString() {
    return `[Rectangle (${this.vertexB.x},${this.vertexB.y}) to (${this.vertexD.x},${this.vertexD.y})]`;
  }

  get area() {
    const length = this.vertexB.x - this.vertexD.x;
    const width = this.vertexB.y - this.vertexD.y;
    return Math.abs(length * width);
  }

  get perimeter() {
    const length = this.vertexB.x - this.vertexD.x;
    const width = this.vertexB.y - this.vertexD.y;
    return 2 * Math.abs(length + width);
  }
  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return (
      (this.vertexB.x === other.vertexB.x &&
        this.vertexD.y === other.vertexD.y) ||
      (this.vertexB.x === other.vertexD.x && this.vertexD.y === other.vertexB.y)
    );
  }
  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const AB = new Line(this.#vertexA, this.vertexB);
    const BC = new Line(this.vertexB, this.#vertexC);
    const CD = new Line(this.#vertexC, this.vertexD);
    const DA = new Line(this.#vertexA, this.vertexD);
    return point.isOn(AB) || point.isOn(BC) || point.isOn(CD) || point.isOn(DA);
  }
  covers(point) {
    if (!(point instanceof Point)) return false;
    const [x1, x2] = [this.vertexB.x, this.vertexD.x].sort();
    const [y1, y2] = [this.vertexB.y, this.vertexD.y].sort();
    return point.x > x1 && point.x < x2 && point.y > y1 && point.y < y2;
  }
}

module.exports = Rectangle;
