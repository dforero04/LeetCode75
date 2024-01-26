const canPlaceFlowers = require("../605_can_place_flowers");

it("should return true with input ([1,0,0,0,1], 1)", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBeTruthy();
});

it("should return false with input ([1,0,0,0,1], 2)", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBeFalsy();
});

it("should return true with input ([0], 1)", () => {
  expect(canPlaceFlowers([0], 1)).toBeTruthy();
});
