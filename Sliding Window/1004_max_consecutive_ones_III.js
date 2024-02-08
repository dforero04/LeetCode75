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
    console.log(nums.slice(left, right), "Right is: ", right);
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

Need more documentation for successful algorithm.
*/

module.exports = maxOnes;
