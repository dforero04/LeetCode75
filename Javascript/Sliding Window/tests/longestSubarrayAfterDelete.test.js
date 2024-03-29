const longestSubarray = require("../1493_longest_subarray_after_delete");

it.each([
  [[1, 1, 0, 1], 3],
  [[0, 1, 1, 1, 0, 1, 1, 0, 1], 5],
  [[1, 1, 1], 2],
  [[0, 1, 0, 1, 0, 1, 0, 1, 0], 2],
])("given array = %s, should return subarray length = %s", (array, result) => {
  expect(longestSubarray(array)).toEqual(result);
});
