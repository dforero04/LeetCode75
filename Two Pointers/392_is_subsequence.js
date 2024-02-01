/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;

  let j = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === str1[j]) j++;
  }

  return j === str1.length;
}

/*
Completed with no help. Intuitive algorithm. Only hold up was knowing if an empty str1 was a subsequence of any length str2.

Algorithm
- An empty str1 is always a subsequence of any length str2, so return true
- Initialize second pointer for str1 (j)
- Traverse through str2
-- When we find a char that is equal to str1[j], increment j
- If we go through all of str2 and j does not equal str1.length, not all letters in str1 are in str2, so not a subsequence.
*/

module.exports = isSubsequence;
