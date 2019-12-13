const assert = require("assert");
const { Line, isTwoPointsEqual } = require("../src/line.js");

describe("line representation ,to string", function() {
  it("should give the representation of the given positve number line", function() {
    const line = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
    const expected = `Line (2,2) (4,3)`;
    assert.strictEqual(line.toString(), expected);
  });
  it("should give the representation of the given negative number line", function() {
    const line = new Line({ x: 3, y: 3 }, { x: 8, y: 2 }, { x: 3, y: 3 });
    const expected = `Line (3,3) (8,2)`;
    assert.strictEqual(line.toString(), expected);
  });
});

describe("line representation, is equal function ", function() {
  it("should equate its own property with given other similar property", function() {
    const line = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
    const other = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
    assert.ok(line.isEqualTo(other));
  });
  it("should equate its own property with given other similar property[negative number]", function() {
    const line = new Line({ x: -4, y: 2 }, { x: 4, y: -3 });
    const other = new Line({ x: -4, y: 2 }, { x: 4, y: -3 });
    assert.ok(line.isEqualTo(other));
  });

  it("should check the instance of the Object, where both should be same", function() {
    const line = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
    const other = { endA: { x: 2, y: 2 }, endB: { x: 4, y: 3 } };
    assert.ok(!line.isEqualTo(other));
  });
});

describe("isTwoPointsEqual function", function() {
  it("should check both given points are equal[positive points]", function() {
    assert.ok(isTwoPointsEqual({ x: 3, y: 1 }, { x: 3, y: 1 }));
  });
  it("should check both given points are equal[negative points]", function() {
    assert.ok(isTwoPointsEqual({ x: -3, y: -1 }, { x: -3, y: -1 }));
  });
  it("should return false whenever the points are not equal", function() {
    assert.ok(!isTwoPointsEqual({ x: 2, y: 1 }, { x: 2, y: 2 }));
  });
});
