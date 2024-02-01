const isSubsequence = require("../392_is_subsequence");

it.each([
  [true, "abc", "ahbgdc"],
  [false, "axc", "ahbgdc"],
  [true, "ace", "abcde"],
  [true, "", "ahbgdc"],
])("should return %s for inputs %s and %s", (result, str1, str2) => {
  expect(isSubsequence(str1, str2)).toEqual(result);
});
