const assert = require("assert");
const Line = require("../src/line.js");

describe("line representation ,to string", function() {
  it("should give the representation of the given line", function() {
    const line = new Line(2, 3);
    const expected = "{ 'x' : 2,'y' : 3}";
    assert.strictEqual(line.toString, expected);
  });
});
