/*
You are given a string s, which contains stars *.

In one operation, you can:

Choose a star in s.
Remove the closest non-star character to its left, as well as remove the star itself.
Return the string after all stars have been removed.

Note:

The input will be generated such that the operation is always possible.
It can be shown that the resulting string will always be unique.
*/

function removeStars(s) {
  const array = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") array.pop();
    else array.push(s[i]);
  }

  return array.join("");
}

/*
Completed on my own. Intuitive stack algorithm.
Algorithm
- Initialize array(stack) to keep hold of each character of string s
- Traverse s and:
-- When you hit a *, you know to remove the most recent character from the stack.
-- If not a *, add character to the stack.
- Return the joining of the character array
*/

module.exports = removeStars;
