const assert = require("chai").assert;
const Line = require("../src/line.js");

describe("Line", function() {
  describe("toString", function() {
    it("should give the representation of the given line [positive points]", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
      const expected = `[Line (2,2) to (4,3)]`;
      assert.strictEqual(line.toString(), expected);
    });
    it("should give the representation of the given line [negative points]", function() {
      const line = new Line({ x: -3, y: 3 }, { x: -8, y: 2 });
      const expected = `[Line (-3,3) to (-8,2)]`;
      assert.strictEqual(line.toString(), expected);
    });

    it("should give the representation of the given line, when extra points are given", function() {
      const line = new Line({ x: 3, y: 3 }, { x: 8, y: 2 }, { x: 3, y: 2 });
      const expected = `[Line (3,3) to (8,2)]`;
      assert.strictEqual(line.toString(), expected);
    });
  });

  describe("isEqualTo", function() {
    it("should equate its own instance with given other similar instance[positive points]", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
      const other = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
      assert.ok(line.isEqualTo(other));
    });
    it("should equate its own instance with other similar instance[negative points]", function() {
      const line = new Line({ x: -4, y: 2 }, { x: 4, y: -3 });
      const other = new Line({ x: -4, y: 2 }, { x: 4, y: -3 });
      assert.ok(line.isEqualTo(other));
    });

    it("should check the instance of the Object, where other should have similar instance", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
      const other = { endA: { x: 2, y: 2 }, endB: { x: 4, y: 3 } };
      assert.ok(!line.isEqualTo(other));
    });

    it("should check the instance of the Object, when other is just an empty object", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
      const other = {};
      assert.ok(!line.isEqualTo(other));
    });
  });
  describe("length", function() {
    it("should give the line length of the instance when the coordinates are positive", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      const actual = line.length;
      assert.approximately(actual, 2.82, 0.5);
    });

    it("should give the length of the instance when the coordinates are positive number", function() {
      const line = new Line({ x: 5, y: -4 }, { x: -2, y: 3 });
      const actual = line.length;
      assert.approximately(actual, 9.89, 0.5);
    });

    it("should give the line length of the instance where the length is floating point number", function() {
      const line = new Line({ x: 5, y: 4 }, { x: 2, y: 3 });
      const actual = line.length;
      assert.approximately(actual, 3.16, 0.05);
    });
  });

  describe("isParallelTo", function() {
    it("should check whether the given instance of line is parallel to each other", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      const other = new Line({ x: 2, y: 2 }, { x: 6, y: 6 });
      assert.ok(line.isParallelTo(other));
    });

    it("should return true when both the instance are ", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      const other = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      assert.ok(line.isParallelTo(other));
    });

    it("should return false when they are not parallel to each ", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      const other = new Line({ x: 2, y: 2 }, { x: 4, y: 5 });
      assert.ok(!line.isParallelTo(other));
    });
  });

  describe("slope", function() {
    it("should give the slope of the line instance", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      assert.strictEqual(line.slope, 1);
    });
    it("should give the slope of the line instance, where the slope has floating point value", function() {
      const line = new Line({ x: 5, y: 4 }, { x: 2, y: 3 });
      const actual = line.slope;
      assert.approximately(actual, 0.33, 0.5);
    });
  });

  describe("findX", function() {
    it("should find the x value for the given y", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const actual = line.findX(2);
      assert.strictEqual(actual, 2);
    });
    it("should give Nan when the point is outside the line segment", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const actual = line.findX(4);
      assert.isNaN(actual);
    });
  });
  describe("findY", function() {
    it("should find the y value for the given x", function() {
      const line = new Line({ x: 0, y: 6 }, { x: 3, y: 8 });
      const actual = line.findY(3);
      assert.approximately(actual, 7.99999998, 0.5);
    });
    it("should give Nan when the point is outside the line segment", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const actual = line.findY(4);
      assert.isNaN(actual);
    });
  });
});
