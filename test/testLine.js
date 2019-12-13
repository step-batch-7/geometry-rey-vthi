const assert = require("chai").assert;
const Line = require("../src/line.js");

describe("Line", function() {
  describe("toString", function() {
    it("should give the representation of the given line [positive points]", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
      const expected = `Line (2,2) (4,3)`;
      assert.strictEqual(line.toString(), expected);
    });
    it("should give the representation of the given line [negative points]", function() {
      const line = new Line({ x: -3, y: 3 }, { x: -8, y: 2 });
      const expected = `Line (-3,3) (-8,2)`;
      assert.strictEqual(line.toString(), expected);
    });

    it("should give the representation of the given line, when extra points are given", function() {
      const line = new Line({ x: 3, y: 3 }, { x: 8, y: 2 }, { x: 3, y: 2 });
      const expected = `Line (3,3) (8,2)`;
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
    it("should give the line length of the instance", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      const actual = line.length;
      assert.approximately(actual, 2.82, 0.5);
    });
    it("should give length of line with decimal point coordinates", function() {
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
});
