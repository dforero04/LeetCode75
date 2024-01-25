const mergeStringsAlternately = require("../1768_merge_strings_alternately");

it("should merge two equal length strings", () => {
  expect(mergeStringsAlternately("abc", "xyz")).toBe("axbycz");
});

it("should correctly merge unequal length strings", () => {
  expect(mergeStringsAlternately("abc", "mnop")).toBe("ambncop");
});
