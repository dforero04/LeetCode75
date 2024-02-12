/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
*/

function maxOnes(nums, k) {
  let left = 0,
    right = 0;

  while (right < nums.length) {
    if (nums[right] === 0) k--;
    if (k < 0) {
      if (nums[left] === 0) {
        k++;
      }
      left++;
    }
    right++;
    // console.log(nums.slice(left, right), "Right is: ", right);
  }

  return right - left;

  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === 1) {
  //       count++;
  //       console.log(`At index ${i}, count is ${count}`);
  //     } else if (subK > 0) {
  //       count++;
  //       if (subK === k) firstZero = i;
  //       subK--;
  //       console.log(`At index ${i}, count is ${count}, k got reduced to ${subK}`);
  //     } else {
  //       while (nums[firstZero + 1] === 0) firstZero++;
  //       console.log(
  //         `At index ${i}, we reset, and count is ${count} and subK is ${subK} and firstZero is at ${firstZero}`
  //       );
  //     }
  //   }

  //   return count > max ? count : max;
}

/*
Completed with help. My initial algorithm was close, but I couldn't figure out how to move the left side of the window.

Algorithm:
- Initialize 2 pointers, left and right.
- Grow and shrink window based on k < 0. 
-- Remember that the window is being adjusted right at every index.
-- Left begins to move once k < 0, because we need to start shrinking the window since there are too many 0's flipped.
-- Increment k whenever k < 0 and left holds a 0 so that we can get closer to 0 to add more into the window.
- Return right minus left to give the length of subarray (window)
*/

module.exports = maxOnes;
