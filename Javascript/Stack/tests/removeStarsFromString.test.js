const removeStars = require("../2390_removing_stars_from_string");

it.each([
  ["lecoe", "leet**cod*e"],
  ["", "erase*****"],
])("should return %s for input string = %s", (result, string) => {
  expect(removeStars(string)).toBe(result);
});
