/*
MEDIUM

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
*/

function reverseWords(s) {
  const array = s.trim().split(" ");
  let result = "";
  for (let i = array.length - 1; i > 0; i--) {
    if (array[i]) {
      result += `${array[i] + " "}`;
    }
  }

  return (result += array[0]);
}

/*
    Completed on first try. Mild trial/error. Intuitive algorithm
    Algorithm:
    - Split input string and insert into array from end.
    - Traverse array
    -- If empty string, don't add to result
    -- If not, add to result with space
    - Return trimmed result

    **If unable to use the array.trim() method, use a two pointer to traverse string to trim whitespace from ends
*/
module.exports = reverseWords;
