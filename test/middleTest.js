const assert = require("chai");
const middle = require('../middle');
const assertEqual = require('../assertEqual');

describe("#middle", () => {
  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assertEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    assertEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});
