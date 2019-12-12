class Line {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  get toString() {
    return "{ 'x' : " + this.x + "," + "'y' : " + this.y + "}";
  }
}

module.exports = Line;
