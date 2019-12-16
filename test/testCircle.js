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
});
