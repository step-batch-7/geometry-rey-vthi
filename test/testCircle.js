const assert = require("chai").assert;
const Circle = require("../src/circle");
const Point = require("../src/point");

describe("Circle", function() {
  describe("toString", function() {
    it("should give the representation of circle[positive coordinates] ", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const expected = "[Circle @(1,2) radius 5]";
      assert.strictEqual(circle.toString(), expected);
    });
    it("should give the representation of circle[negative coordinates]", function() {
      const circle = new Circle({ x: -1, y: 2 }, 3);
      const expected = "[Circle @(-1,2) radius 3]";
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
    it("should not validate if Circle object is not given", function() {
      const circle1 = new Circle({ x: 5, y: 2 }, 5);
      const circle2 = { point: { x: 3, y: 4 }, radius: 5 };
      assert.isNotOk(circle1.isEqualTo(circle2));
    });
  });
  describe("area", function() {
    it("it should find the area of the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      assert.approximately(circle.area, 153.93, 0.5);
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
  describe("hasPoint", function() {
    it("should predicate whether the circle has the point on the circumference of the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(0, 5);
      assert.isTrue(circle.hasPoint(point));
    });
    it("should return when the point is not on the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(0, 3);
      assert.isFalse(circle.hasPoint(point));
    });
    it("should validate the circle,when the area is zero and centre is given", function() {
      const circle = new Circle({ x: 0, y: 0 }, 0);
      const point = new Point(0, 0);
      assert.isOk(circle.hasPoint(point));
    });
  });
  describe("moveTo", function() {
    it("should change the circle's x and y coordinates", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const expected = new Circle({ x: 1, y: 1 }, 5);
      const actual = circle.moveTo({ x: 1, y: 1 });
      assert.isTrue(actual.isEqualTo(expected));
    });
  });

  describe("covers", function() {
    it("should validate, when the point is inside the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(0, 4);
      assert.isTrue(circle.covers(point));
    });
    it("should invalidate, when the point is inside the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(0, 6);
      assert.isFalse(circle.covers(point));
    });
    it("should validate, when the point is on the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(0, 5);
      assert.isFalse(circle.covers(point));
    });
    it("should invalidate, when the given point is not an instance of point", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      assert.isFalse(circle.covers({ x: 0, y: 4 }));
    });
  });
});
