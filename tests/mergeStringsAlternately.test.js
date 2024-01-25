const mergeStringsAlternately = require("../mergeStringsAlternately.js");

it("should merge two equal length strings", () => {
  expect(mergeStringsAlternately("abc", "xyz")).toBe("axbycz");
});

it("should correctly merge unequal length strings", () => {
  expect(mergeStringsAlternately("abc", "mnop")).toBe("ambncop");
});
