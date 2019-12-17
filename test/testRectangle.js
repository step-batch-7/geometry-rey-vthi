const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");
const Point = require("../src/point");

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

  describe("perimeter", function() {
    it("should find perimeter of the rectangle", function() {
      const rectangle = new Rectangle({ x: 2, y: 3 }, { x: 1, y: 1 });
      assert.strictEqual(rectangle.perimeter, 6);
    });
    it("should find perimeter zero of a rectangle,when length and width is 0", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 1 });
      assert.strictEqual(rectangle.perimeter, 0);
    });
    it("should get perimeter of given diagonal parallel to x-axis", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 3, y: 1 });
      assert.strictEqual(rectangle.perimeter, 4);
    });
    it("should get perimeter of given diagonal parallel to y-axis", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 5 });
      assert.strictEqual(rectangle.perimeter, 8);
    });
  });
  describe("isEqualTo", function() {
    it("should predicate whether the two given two rectangles are equal", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 5 });
      const rectangle2 = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 5 });
      assert.isTrue(rectangle1.isEqualTo(rectangle2));
    });

    it("should invalidate when given object is not a instance of Rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const other = { vertexB: { x: 1, y: 1 }, vertexD: { x: 2, y: 3 } };
      assert.isFalse(rectangle.isEqualTo(other));
    });
    it("should invalidate when given rectangle is not a equal", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const other = { vertexB: { x: 1, y: 1 }, vertexD: { x: 4, y: 2 } };
      assert.isFalse(rectangle.isEqualTo(other));
    });
  });

  describe("hasPoint", function() {
    it("should predicate whether the given point is on the edge of existing rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const point = new Point(2, 3);
      assert.isTrue(rectangle.hasPoint(point));
    });
    it("should invalidate when the given point is not on the edge of rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const point = new Point(2, 5);
      assert.isFalse(rectangle.hasPoint(point));
    });
    it("should invalidate when the given point is not the instance of Point", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      assert.isFalse(rectangle.hasPoint({ x: 2, y: 3 }));
    });
  });
});
