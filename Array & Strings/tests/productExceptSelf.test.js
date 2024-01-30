const productExceptSelf = require("../238_product_except_self");

it.each([
  [
    [1, 2, 3, 4],
    [24, 12, 8, 6],
  ],
  [
    [-1, 1, 0, -3, 3],
    [0, 0, 9, 0, 0],
  ],
  [
    [2, 4, 6, 8],
    [192, 96, 64, 48],
  ],
])("for input %s, should return %s result", (nums, result) => {
  expect(productExceptSelf(nums)).toEqual(result);
});
