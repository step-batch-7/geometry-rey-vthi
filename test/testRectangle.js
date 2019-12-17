const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");

describe("Rectangle ", function() {
  describe("toString", function() {
    it("should give representation of the Rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const expected = "[Rectangle (1,1) to (2,3)]";
      assert.strictEqual(rectangle.toString(), expected);
    });
  });
  describe("area", function() {
    it("should find area of the rectangle using the diagonal points", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const actual = rectangle.area;
      assert.strictEqual(actual, 2);
    });
    it("should give area of a rectangle when diagonal points are alternate", function() {
      const rectangle = new Rectangle({ x: 5, y: 4 }, { x: 1, y: 1 });
      assert.strictEqual(rectangle.area, 12);
    });
    it("should give area  zero of a rectangle, width is 0", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 8, y: 1 });
      assert.strictEqual(rectangle.area, 0);
    });
    it("should give area  zero of a rectangle, length is 0", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 9 });
      assert.strictEqual(rectangle.area, 0);
    });
  });
});
