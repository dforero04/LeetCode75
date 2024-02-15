const closeStrings = require("../1657_close_strings");

it.each([
  ["abc", "bca", true],
  ["a", "aa", false],
  ["cabbba", "abbccc", true],
])("given word1 = %s and word2 = %s, returns %s", (word1, word2, result) => {
  expect(closeStrings(word1, word2)).toEqual(result);
});
