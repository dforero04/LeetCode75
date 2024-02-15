/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

function moveZeroes(nums) {
  let nextSpaceToFill = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nums[nextSpaceToFill++] = nums[i];
  }

  for (let i = nextSpaceToFill; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

/*
Completed by myself.
Algorithm:
- Initialize variable to keep track of where non-zero values should be placed
- Traverse array and when you find a non-zero value, put it at nextSpaceToFill abd increment nextSpaceToFill
-- We don't care where 0's are located because we will just fill the array with zeros at the end
- Traverse array again starting at where nextSpaceToFill left off and fill rest of array with 0's
- Return array
*/

module.exports = moveZeroes;
