const assert = require("chai").assert;
const Point = require("../src/Point");

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
      assert.strictEqual(
        point.visit((x, y) => x + y),
        5
      );
      assert.strictEqual(
        point.visit((x, y) => x * y),
        6
      );
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
  });
});
