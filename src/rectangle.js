const Point = require("./point");
const Line = require("./line");

const getSides = function(pointB, pointD) {
  const pointA = new Point(pointD.x, pointB.y);
  const pointC = new Point(pointB.x, pointD.y);
  const AB = new Line(pointB, pointA);
  const BC = new Line(pointB, pointC);
  const CD = new Line(pointD, pointC);
  const DA = new Line(pointD, pointA);
  return [AB, BC, CD, DA];
};

class Rectangle {
  constructor(vertexB, vertexD) {
    this.vertexB = new Point(vertexB.x, vertexB.y);
    this.vertexD = new Point(vertexD.x, vertexD.y);
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
    const [AB, BC, CD, DA] = getSides(this.vertexB, this.vertexD);
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
