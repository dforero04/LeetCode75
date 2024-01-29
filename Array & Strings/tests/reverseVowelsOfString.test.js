const reverseVowels = require("../345_reverse_vowels_of_string");

it('should reverse "hello" to "holle"', () => {
  expect(reverseVowels("hello")).toBe("holle");
});

it('should return "leotcede" for "leetcode"', () => {
  expect(reverseVowels("leetcode")).toBe("leotcede");
});

it('should return "francisco" for "froncisca"', () => {
  expect(reverseVowels("francisco")).toBe("froncisca");
});
