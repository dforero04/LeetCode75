const findDifferenceOfArrays = require("../2215_diff_arrays");

it.each([
  [
    [1, 3],
    [4, 6],
    [1, 2, 3],
    [2, 4, 6],
  ],
  [[3], [], [1, 2, 3, 3], [1, 1, 2, 2]],
])(
  "should return %s and %s for input nums1 = %s and nums2 = %s",
  (result1, result2, nums1, nums2) => {
    const [set1, set2] = findDifferenceOfArrays(nums1, nums2);
    expect(set1).toEqual(result1);
    expect(set2).toEqual(result2);
  }
);
