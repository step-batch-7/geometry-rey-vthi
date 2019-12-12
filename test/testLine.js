const assert = require("assert");
const Line = require("../src/line.js");

describe("line representation ,to string", function() {
  it("should give the representation of the given line", function() {
    const line = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
    const expected = `Line (2,2) (4,3)`;
    assert.strictEqual(line.toString(), expected);
  });
  it("should give the representation of the given line", function() {
    const line = new Line({ x: 3, y: 3 }, { x: 8, y: 2 }, { x: 3, y: 3 });
    const expected = `Line (3,3) (8,2)`;
    assert.strictEqual(line.toString(), expected);
  });
});

describe("line representation, is equal function ", function() {
  it("should equate its own property with given other property", function() {
    const line = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
    const other = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
    assert.ok(line.isEqualTo(other));
  });
  it("should equate its own property with given other similar property", function() {
    const line = new Line(6, 2);
    const other = new Line(6, 2, 3);
    assert.ok(line.isEqualTo(other));
  });
});
