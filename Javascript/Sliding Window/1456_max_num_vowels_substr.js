/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
*/

function maxVowels(s, k) {
  let max = 0;
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) max++;
  }

  let count = max;
  for (let j = k; j < s.length; j++) {
    if (vowels.has(s[j - k])) count--;
    if (vowels.has(s[j])) count++;
    if (count > max) max = count;
  }

  return max;
}

/*
Complete on my own. Similar to the algorithm I learned with #643.
Algorithm:
- Initialize max and Set containing all vowels, per prompt
- Traverse s from 0 to k to find the initial number of vowels in substring of length k. Save into max variable.
- Initialize count equal to max since the current count of vowels in substring is max. This variable is used to keep a current count of vowels in substring.
- Traverse s from k to s.length, and at each i:
-- If the vowel set has the first character of the previous substring, then decrement count since we are removing that character from the current substring.
-- If vowel set has the new next character, then increment count since we are adding it to the current substring.
-- If the new count is greater than max, set max to count.
- Return max

Only optimization I read about was to return max early if max === k
*/

module.exports = maxVowels;
