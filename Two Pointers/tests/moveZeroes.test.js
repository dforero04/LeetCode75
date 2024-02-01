const moveZeroes = require("../283_move_zeroes");

it.each([
  [
    [0, 1, 0, 3, 12],
    [1, 3, 12, 0, 0],
  ],
  [[0], [0]],
  [
    [2, 0, 3, 0, 4, 0, 5],
    [2, 3, 4, 5, 0, 0, 0],
  ],
])("should transform %s to %s", (input, result) => {
  expect(moveZeroes(input)).toEqual(result);
});
