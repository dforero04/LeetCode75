const greatestCandies = require("../1431_greatest_number_of_candies");

it("should return [true, false, false] for input ([4,2,1], 1)", () => {
  expect(greatestCandies([4, 2, 1], 1)).toEqual([true, false, false]);
});

it("should return [true, true, true, false, true] for input ([2,3,5,1,3], 3)", () => {
  expect(greatestCandies([2, 3, 5, 1, 3], 3)).toEqual([
    true,
    true,
    true,
    false,
    true,
  ]);
});

it("should return [true, false, true] for input ([12,1,12], 10)", () => {
  expect(greatestCandies([12, 1, 12], 10)).toEqual([true, false, true]);
});
