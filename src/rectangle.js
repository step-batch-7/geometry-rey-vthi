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

const getLengthAndWidth = function(vertexB, vertexD) {
  const length = vertexB.x - vertexD.x;
  const width = vertexB.y - vertexD.y;
  return [Math.abs(length), Math.abs(width)];
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
    const [length, width] = getLengthAndWidth(this.vertexB, this.vertexD);
    return length * width;
  }

  get perimeter() {
    const [length, width] = getLengthAndWidth(this.vertexB, this.vertexD);
    return 2 * (length + width);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return (
      (this.vertexB.isEqualTo(other.vertexB) &&
        this.vertexD.isEqualTo(other.vertexD)) ||
      (this.vertexB.isEqualTo(other.vertexD) &&
        this.vertexD.isEqualTo(other.vertexB))
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
