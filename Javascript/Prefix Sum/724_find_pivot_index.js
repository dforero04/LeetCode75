/*
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
*/

function findPivotIndex(nums) {
  const sum = nums.reduce((acc, cur) => (acc += cur), 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let diff = sum - nums[i] - leftSum;

    if (diff === leftSum) return i;
    leftSum += nums[i];
  }

  return -1;
}

/*
Completed on my own. Intuitive algorithm.
Algorithm:
- Find sum of entire array so we can easily keep track of the difference between leftSum and rightSum (diff)
- Initialize leftSum to 0 since at index 0, leftSum = 0
- Traverse array and:
-- calculate sum of values to the right of i
-- compare rightSum (diff) with leftSum and return i if equal
-- if not equal, add nums[i] to leftSum to incrementally grow as you move i
- If diff and leftSum never equal, return -1
*/

module.exports = findPivotIndex;
