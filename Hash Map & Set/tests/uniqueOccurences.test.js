const unique = require("../1207_unique_occurences.js");

it("should pass", () => {
  expect(unique([1, 2, 3, 4])).toBeFalsy();
});

it("should pass", () => {
  expect(unique([1, 2, 2, 3, 3, 3])).toBeTruthy();
});
