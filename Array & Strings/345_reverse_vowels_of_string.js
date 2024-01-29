/* 
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

function reverseVowels(s) {
  const array = [];
  const letters = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (let i = 0; i < s.length; i++) {
    if (letters.includes(s[i])) {
      array.push(s[i]);
    }
  }
  let result = "";
  for (let i = 0, j = array.length - 1; i < s.length; i++) {
    if (letters.includes(s[i])) {
      result += array[j];
      j--;
    } else {
      result += s[i];
    }
  }
  return result;
}

/*
Completed first try on my own. Mild trial/error. Intuitive algorithm.
*/

module.exports = reverseVowels;
