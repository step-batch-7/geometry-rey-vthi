const assert = require("assert");
const Line = require("../src/line.js");

describe("line representation", function() {
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
});

describe("line representation", function() {
  describe("isEqualTo", function() {
    it("should equate its own instance with given other similar instance", function() {
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
});
