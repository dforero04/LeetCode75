const greatestCommonDivisorOfStrings = require("../1071_greatest_common_divisor_of_strings");

it("should return 'ABC' as GCD of 'ABCABC' and 'ABC'", () => {
  expect(greatestCommonDivisorOfStrings("ABCABC", "ABC")).toBe("ABC");
});

it("should return 'AB' as GCD of 'ABABAB' and 'ABAB'", () => {
  expect(greatestCommonDivisorOfStrings("ABABAB", "ABAB")).toBe("AB");
});

it("should return an empty string as GCD of 'ABCDEF' and 'ABC'", () => {
  expect(greatestCommonDivisorOfStrings("ABCDEF", "ABC")).toBe("");
});

it("should return an empty string as GCD of 'LEET' and 'CODE'", () => {
  expect(greatestCommonDivisorOfStrings("LEET", "CODE")).toBe("");
});
