const highestAltitude = require("../1732_highest_altitude");

it.each([
  [[-5, 1, 5, 0, -7], 1],
  [[-4, -3, -2, -1, 4, 3, 2], 0],
])("should find highest altitude of %s to be %s", (gain, result) => {
  expect(highestAltitude(gain)).toBe(result);
});
