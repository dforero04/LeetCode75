/*
EASY

For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/

function findGCD(num1, num2) {
  if (!num2) return num1;
  return findGCD(num2, num1 % num2);
}

/*
    This function will find a GCD of two numbers.
    Easy Example: findGCD(25, 5) => findGCD(5, 0) => 5
    GCD is 1: findGCD(5, 3) => findGCD(3, 2) => findGCD(2, 1) => findGCD(1, 0) => 1
*/

function greatestCommonDivisorOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";
  const gcd = findGCD(str1.length, str2.length);

  return str1.substring(0, gcd);
}

/*
    Needed help writing findGCD function.
    Algorithm:
    - Check if str1 + str2 is equal to str2 + str1 because they need to have a common prefix
    - Use findGCD function to get desired length of GCD
    - Return the substring of length GCD to get the result
*/

module.exports = greatestCommonDivisorOfStrings;
