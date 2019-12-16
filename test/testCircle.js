const assert = require("chai").assert;
const Circle = require("../src/circle");

describe("Circle", function() {
  describe("toString", function() {
    it("should give the representation of circle ", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const expected = "[Circle @(1, 2) radius 5]";
      assert.strictEqual(circle.toString(), expected);
    });
    it("should give the representation of circle[positive coordinates", function() {
      const circle = new Circle({ x: -1, y: 2 }, 3);
      const expected = "[Circle @(-1, 2) radius 3]";
      assert.strictEqual(circle.toString(), expected);
    });
  });
  describe("isEqualTo", function() {
    it("should check whether both the circle are at same location and has equal radii", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 4);
      const circle2 = new Circle({ x: 0, y: 0 }, 4);
      assert.isTrue(circle1.isEqualTo(circle2));
    });
    it("should invalidate when the circle location are not same", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 4);
      const circle2 = new Circle({ x: 0, y: 6 }, 4);
      assert.isFalse(circle1.isEqualTo(circle2));
    });
    it("should invalidate when the circle radius are not same", function() {
      const circle1 = new Circle({ x: 0, y: 6 }, 3);
      const circle2 = new Circle({ x: 0, y: 6 }, 4);
      assert.isFalse(circle1.isEqualTo(circle2));
    });
    it("should invalidate when the other is not the instance of Circle class", function() {
      const circle = new Circle({ x: 0, y: 6 }, 4);
      assert.isFalse(circle.isEqualTo({}));
    });
  });
  describe("area", function() {
    it("it should find the area of the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 7);
    });
    it("should give 0,when the radius of circle is 0", function() {
      const circle = new Circle({ x: 3, y: 5 }, 0);
      assert.strictEqual(circle.area, 0);
    });
  });
  describe("perimeter", function() {
    it("should find the perimeter of the circle", function() {
      const circle = new Circle({ x: 3, y: 4 }, 4);
      assert.approximately(circle.perimeter, 25.12, 0.5);
    });
    it("should give 0,when the radius of circle is 0", function() {
      const circle = new Circle({ x: 3, y: 5 }, 0);
      assert.strictEqual(circle.perimeter, 0);
    });
  });
});
