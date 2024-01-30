const increasingTriplet = require("../334_increasing_triplet_sequence");

it.each([
  [true, [1, 2, 3, 4, 5]],
  [false, [5, 4, 3, 2, 1]],
  [true, [2, 1, 5, 0, 4, 6]],
  [false, [8, 7, 6, 9, 4]],
])("should return %s for input %s", (result, input) => {
  expect(increasingTriplet(input)).toBe(result);
});
