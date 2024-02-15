const maxVowels = require("../1456_max_num_vowels_substr");

it.each([
  [3, "abciiidef", 3],
  [2, "aeiou", 2],
  [2, "leetcode", 3],
])("should return %s for string = %s and k = %s", (result, string, k) => {
  expect(maxVowels(string, k)).toBe(result);
});
