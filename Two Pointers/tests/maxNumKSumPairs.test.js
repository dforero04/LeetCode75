const maxOperations = require("../1679_max_num_k_sum_pairs");

it.each([
  [2, [1, 2, 3, 4], 5],
  [1, [3, 1, 3, 4, 3], 6],
  [2, [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2],
])("should return %s for input array = %s and k = %s", (result, array, k) => {
  expect(maxOperations(array, k)).toBe(result);
});
