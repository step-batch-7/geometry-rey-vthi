const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");

describe("Rectangle ", function() {
  describe("toString", function() {
    it("should give representation of the Rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const expected = "[Rectangle (1,1) to (2,3)]";
      assert.strictEqual(rectangle.toString(), expected);
    });
  });
});

// describe("describe the function", function () {

//     it("description",function(){
//         assert.type(actual,expected);
//     });
// });
