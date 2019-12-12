const assert = require("assert");
const Line = require("../src/line.js");

describe("line representation ,to string", function() {
  it("should give the representation of the given line", function() {
    const line = new Line(2, 3);
    const expected = "{ 'x' : 2,'y' : 3}";
    assert.strictEqual(line.toString(), expected);
  });
});

describe("line representation, is equal function ", function() {
  it("should equate its own property with given other property", function() {
    const line = new Line(2, 4);
    assert.ok(line.isEqual({ x: 2, y: 4 }));
  });
  it("should equate its own property with given other similar property", function() {
    const line = new Line(6, 2);
    assert.ok(line.isEqual({ x: 6, y: 2 }));
  });
});
