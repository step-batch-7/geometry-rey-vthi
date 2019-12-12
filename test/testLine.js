const assert = require("assert");
const Line = require("../src/line.js");

describe("line representation ,to string", function() {
  it("should give the representation of the given line", function() {
    const line = new Line(2, 3);
    const expected = `Line (2,3)`;
    assert.strictEqual(line.toString(), expected);
  });
  it("should give the representation of the given line", function() {
    const line = new Line(5, 3, 5);
    const expected = `Line (5,3)`;
    assert.strictEqual(line.toString(), expected);
  });
});

describe("line representation, is equal function ", function() {
  it("should equate its own property with given other property", function() {
    const line = new Line(2, 4);
    const other = new Line(2, 4);
    assert.ok(line.isEqual(other));
  });
  it("should equate its own property with given other similar property", function() {
    const line = new Line(6, 2);
    const other = new Line(6, 2, 3);
    assert.ok(line.isEqual(other));
  });
});
