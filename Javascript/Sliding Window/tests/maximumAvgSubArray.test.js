const maxAvgSubarray = require("../643_maximum_avg_subarray_I");

it.each([
  [12.75, [1, 12, -5, -6, 50, 3], 4],
  [5, [5], 1],
  [-1, [-1], 1],
])("should return %s for input array = %s and k = %s", (result, array, k) => {
  expect(maxAvgSubarray(array, k)).toBe(result);
});
