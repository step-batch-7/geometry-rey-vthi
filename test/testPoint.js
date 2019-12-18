const assert = require("chai").assert;
const Line = require("../src/line");
const Point = require("../src/point");
const Circle = require("../src/circle");

describe("Point", function() {
  describe("toString", function() {
    it("should give the representation of the point", function() {
      const point = new Point(2, 3);
      assert.strictEqual(point.toString(), "[Point @(2,3)]");
    });
  });
  describe("visit", function() {
    it("should perform specified operation on x and y", function() {
      const point = new Point(2, 3);
      const actual1 = point.visit((x, y) => x + y);
      assert.strictEqual(actual1, 5);
      const actual2 = point.visit((x, y) => x * y);
      assert.strictEqual(actual2, 6);
    });
  });
  describe("isEqualTo", function() {
    it("should return true, when other point's coordinates are equal to the existing instance ", function() {
      const point = new Point(2, 3);
      const other = new Point(2, 3);
      assert.isTrue(point.isEqualTo(other));
    });

    it("should return false, when any one of the coordinates are not equal", function() {
      const point = new Point(2, 3);
      const other = new Point(2, 4);
      assert.isFalse(point.isEqualTo(other));
    });
    it("should return false, when other is not similar instance", function() {
      const point = new Point(2, 3);
      assert.isFalse(point.isEqualTo({ x: 2, y: 3 }));
    });
  });
  describe("clone", function() {
    it("should give copy of existing instance", function() {
      const point = new Point(2, 3);
      assert.deepStrictEqual(point.clone(), point);
    });
  });

  describe("findDistanceTo", function() {
    it("should give length of floating point value", function() {
      const p1 = new Point(5, 4);
      const p2 = new Point(2, 3);
      const actual = p1.findDistanceTo(p2);
      assert.approximately(actual, 3.16, 0.05);
    });
    it("should give length 0, when both points are in the axis", function() {
      const p1 = new Point(5, 4);
      assert.strictEqual(p1.findDistanceTo(p1), 0);
    });
    it("should give the length of the instance, when the coordinates are negative numbers", function() {
      const p1 = new Point(5, -4);
      const p2 = new Point(-2, 3);
      const actual = p1.findDistanceTo(p2);
      assert.approximately(actual, 9.89, 0.5);
    });
    it("should give NaN when the given point is not an instance of Point", function() {
      const point1 = new Point(1, 2);
      const point2 = { x: 3, y: 3 };
      assert.isNaN(point1.findDistanceTo(point2));
    });
  });

  describe("isOn", function() {
    it("should predicate whether the point is on the line", function() {
      const line = new Line({ x: 3, y: 3 }, { x: 4, y: 4 });
      const point = new Point(3, 3);
      assert.isTrue(point.isOn(line));
    });
    it("should return, when the point is not on the line", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 5 });
      const point = new Point(8, 8);
      assert.isFalse(point.isOn(line));
    });
    it("should throw error, when the object doesn't contain hasPoint method", function() {
      const line = { endA: { x: 2, y: 3 }, endB: { x: 2, y: 3 } };
      const point = new Point(0, 0);
      assert.throws(() => point.isOn(line));
    });
    it("should validate for circle, where the area 0 and centre is given", function() {
      const circle = new Circle({ x: 0, y: 0 }, 0);
      const point = new Point(0, 0);
      assert.isTrue(point.isOn(circle));
    });
    it("should validate, when the given point is on the circle", function() {
      const circle = new Circle({ x: 2, y: 8 }, 6);
      const point = new Point(2, 2);
      assert.isTrue(point.isOn(circle));
    });
    it("should invalidate when the point is inside the circle", function() {
      const circle = new Circle({ x: 2, y: 8 }, 6);
      const point = new Point(2, 3);
      assert.isFalse(point.isOn(circle));
    });
    it("should throw error, when the object doesn't contain hasPoint method", function() {
      const circle = { point: { x: 3, y: 3 }, radius: 2 };
      const point = new Point(0, 0);
      assert.throws(() => point.isOn(circle));
    });
  });
});
