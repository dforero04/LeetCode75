const compress = require("../443_string_compression");

it.each([
  [6, ["a", "a", "b", "b", "c", "c", "c"]],
  [1, ["a"]],
  [4, ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]],
])("should return %s for input %s", (result, input) => {
  expect(compress(input)).toBe(result);
});
