const containerWithMostWater = require("../11_container_with_most_water");

it.each([
  [49, [1, 8, 6, 2, 5, 4, 8, 3, 7]],
  [1, [1, 1]],
])("should return %s for input %s", (result, input) => {
  expect(containerWithMostWater(input)).toBe(result);
});
