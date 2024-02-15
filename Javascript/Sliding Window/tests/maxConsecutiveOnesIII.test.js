const maxOnes = require("../1004_max_consecutive_ones_III");

it.each([
  [6, [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2],
  [10, [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3],
])("should return %s with input array = %s and k = %s", (result, array, k) => {
  expect(maxOnes(array, k)).toEqual(result);
});
