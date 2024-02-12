/*
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
*/

function longestSubarray(nums) {
  let left = 0;
  let right = 0;
  let zeroCount = 0;

  while (right < nums.length) {
    if (nums[right] === 0) zeroCount++;
    // Since we are only allowed to delete one value in the subarray, we make sure we have <= 1 zeroes in our window
    if (zeroCount > 1) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }
    right++;
  }

  // Always minus 1 since you are technically deleting one value from the subarray
  return right - left - 1;
}

/*
Completed on my own, but very similar to #1004. The algorithm is becoming more intuitive and reusable.

Algorithm:
- Initialize left and right as window edges, and zeroCount to keep track of num of Zeros in window
- Traverse array and :
-- if nums[right] === 0, increment zeroCount.
-- Once zeroCount > 1, we need to start shrinking the window.
-- Also, we can decrement zeroCount if we are removing a zero from the window (make room for more zeroes)
- The final values of right and left DO NOT indicate the window with the right answer. They just indicate the length of the window meeting the successful conditions
*/

module.exports = longestSubarray;
