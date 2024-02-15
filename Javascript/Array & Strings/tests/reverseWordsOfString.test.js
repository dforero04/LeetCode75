const reverseWords = require("../151_reverse_words_of_string");

it.each([
  ["the sky is blue", "blue is sky the"],
  ["   hello world   ", "world hello"],
  ["a good   example", "example good a"],
])("should reverse %s to %s", (s, reversedS) => {
  expect(reverseWords(s)).toBe(reversedS);
});
