const findPivotIndex = require("../724_find_pivot_index");

it.each([
  [3, [1, 7, 3, 6, 5, 6]],
  [-1, [1, 2, 3]],
  [0, [2, 1, -1]],
])("should return %s for input array = %s", (result, array) => {
  expect(findPivotIndex(array)).toBe(result);
});
