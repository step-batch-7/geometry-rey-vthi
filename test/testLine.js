const assert = require("chai").assert;
const Line = require("../src/line");
const Point = require("../src/point");

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
    it("should validate when other line are equal", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
      const other = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
      assert.isTrue(line.isEqualTo(other));
    });
    it("should validate when other line are equal[negative points]", function() {
      const line = new Line({ x: -4, y: 2 }, { x: 4, y: -3 });
      const other = new Line({ x: -4, y: 2 }, { x: 4, y: -3 });
      assert.isTrue(line.isEqualTo(other));
    });
    it("should validate when the points are in opposite", function() {
      const line = new Line({ x: -4, y: 2 }, { x: 4, y: -3 });
      const other = new Line({ x: 4, y: -3 }, { x: -4, y: 2 });
      assert.isTrue(line.isEqualTo(other));
    });

    it("should invalidate when any one points are not equal", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
      const other = new Line({ x: 2, y: 2 }, { x: 2, y: 3 });
      assert.isFalse(line.isEqualTo(other));
    });

    it("should invalidate when the given line is not a Line instance", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
      const other = { endA: { x: 2, y: 2 }, endB: { x: 4, y: 3 } };
      assert.isFalse(line.isEqualTo(other));
    });

    it("should check the instance of the Object, when other is just an empty object", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
      const other = {};
      assert.isFalse(line.isEqualTo(other));
    });
  });

  describe("length", function() {
    it("should give the line length of the instance, when the coordinates are positive numbers", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      const actual = line.length;
      assert.approximately(actual, 2.82, 0.5);
    });

    it("should give the length of the instance, when the coordinates are negative numbers", function() {
      const line = new Line({ x: 5, y: -4 }, { x: -2, y: 3 });
      const actual = line.length;
      assert.approximately(actual, 9.89, 0.5);
    });

    it("should give the line length of the instance, where the length is floating point number", function() {
      const line = new Line({ x: 5, y: 4 }, { x: 2, y: 3 });
      const actual = line.length;
      assert.approximately(actual, 3.16, 0.05);
    });

    it("should give 0 length when both the end points are equal", function() {
      const line = new Line({ x: 5, y: 4 }, { x: 5, y: 4 });
      assert.strictEqual(line.length, 0);
    });
  });

  describe("isParallelTo", function() {
    it("should check whether the given instance of line is parallel to each other", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      const other = new Line({ x: 2, y: 2 }, { x: 6, y: 6 });
      assert.isFalse(line.isParallelTo(other));
    });

    it("should return false when both the lines are overlapping", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      const other = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      assert.isFalse(line.isParallelTo(other));
    });

    it("should return false when they are not parallel to each ", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      const other = new Line({ x: 2, y: 2 }, { x: 4, y: 5 });
      assert.isFalse(line.isParallelTo(other));
    });

    it("should return false when the two lines are overlapping and parallel to y axis ", function() {
      const line = new Line({ x: 2, y: 0 }, { x: 2, y: 4 });
      const other = new Line({ x: 3, y: 5 }, { x: 3, y: 7 });
      assert.isTrue(line.isParallelTo(other));
    });
  });

  describe("slope", function() {
    it("should give the slope of the line instance[positive slope value]", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      assert.strictEqual(line.slope, 1);
    });

    it("should give the slope of the line instance[positive slope value]", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 1, y: 4 });
      assert.strictEqual(line.slope, -2);
    });
    it("should give the slope of the line instance, where the slope has floating point value", function() {
      const line = new Line({ x: 5, y: 4 }, { x: 2, y: 3 });
      const actual = line.slope;
      assert.approximately(actual, 0.33, 0.5);
    });
    it("should give NaN, when both the ends are same", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 2, y: 2 });
      assert.isNaN(line.slope);
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
    it("should find the y value for the given x[floating y value", function() {
      const line = new Line({ x: 0, y: 6 }, { x: 3, y: 8 });
      const actual = line.findY(3);
      assert.approximately(actual, 7.99999998, 0.5);
    });
    it("should find the y value for the given x[floating y value", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 0, y: 8 });
      const actual = line.findY(0);
      assert.strictEqual(actual, 0);
    });
    it("should give Nan when the point is outside the line segment", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const actual = line.findY(4);
      assert.isNaN(actual);
    });
  });

  describe("split", function() {
    it("should split the line into two using exact mid point", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const splitLine1 = new Line({ x: 1, y: 1 }, { x: 2, y: 2 });
      const splitLine2 = new Line({ x: 2, y: 2 }, { x: 3, y: 3 });
      assert.deepStrictEqual(line.split(), [splitLine1, splitLine2]);
    });
  });

  describe("hasPoint", function() {
    it("should check whether the given point is in the instance of point", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      assert.isFalse(line.hasPoint({ x: 1, y: 1 }));
    });
    it("should check whether the given point is existing in the line segment", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const point = new Point(1, 1);
      assert.isTrue(line.hasPoint(point));
    });

    it("should check whether the given point is existing in the line segment", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const point = new Point(2, 2);
      assert.isTrue(line.hasPoint(point));
    });
    it("should return false if the point doesn't exist in that line segment", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const point = new Point(4, 4);
      assert.isFalse(line.hasPoint(point));
    });
    it("should return false if the point doesn't exist in that line segment", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 3, y: 3 });
      const point = new Point(2, 4);
      assert.isFalse(line.hasPoint(point));
    });
  });

  describe("findPointStartFrom", function() {
    it("should give point,when the length is given from starting point", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 4, y: 0 });
      const expectedPoint = new Point(1, 0);
      const actualPoint = line.findPointFromStart(1);
      assert.ok(actualPoint.isEqualTo(expectedPoint));
    });
    it("should invalidate when the given distance is more than the length of the line", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 4, y: 0 });
      assert.isNull(line.findPointFromStart(5));
    });
  });
  describe("findPointFromEnd", function() {
    it("should give the point, from the end of the line", function() {
      const line = new Line({ x: 5, y: 0 }, { x: 0, y: 0 });
      const expectedPoint = new Point(3, 0);
      const actualPoint = line.findPointFromStart(2);
      assert.ok(actualPoint.isEqualTo(expectedPoint));
    });
    it("should invalidate when the given distance is more than the length of the line", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 4, y: 0 });
      assert.isNull(line.findPointFromStart(5));
    });
  });
});
