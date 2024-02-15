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
  const answer = productExceptSelf(nums);
  // Altering answer to help with +0 and -0
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === -0) answer[i] = 0;
  }
  expect(answer).toEqual(result);
});
