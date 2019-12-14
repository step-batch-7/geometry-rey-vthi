const assert = require("chai").assert;
const Point = require("../src/Point");

describe("Point", function() {
  describe("toString", function() {
    it("should give the representation of the point", function() {
      const point = new Point(2, 3);
      assert.strictEqual(point.toString(), "[Point @(2,3)]");
    });
  });
});
