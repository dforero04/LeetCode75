const asteroidCollision = require("../735_asteroid_collision");

it.each([
  [
    [5, 10],
    [5, 10, -5],
  ],
  [[], [8, -8]],
  [[10], [10, 2, -5]],
])("should return %s for input array = %s", (result, input) => {
  expect(asteroidCollision(input)).toEqual(result);
});
