const findPeakElement = require("../162_find_peak_element");

it.each([
  [2, [1, 2, 3, 1]],
  [5, [1, 2, 1, 3, 5, 6, 4]],
])("should return %s for input array = %s", (result, array) => {
  expect(findPeakElement(array)).toEqual(result);
});
