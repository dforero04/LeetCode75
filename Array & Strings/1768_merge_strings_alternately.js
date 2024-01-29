/*
EASY

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/

function mergeStringsAlternately(word1, word2) {
  const max = Math.max(word1.length, word2.length);
  let result = "";

  for (let i = 0; i < max; i++) {
    if (word1[i]) result += word1[i];
    if (word2[i]) result += word2[i];
  }
  return result;
}

/*
  Completed in first try.
  Time complexity = O(n), with n being length of longer string.
  Space complexity = O(1), constant space
*/

module.exports = mergeStringsAlternately;
