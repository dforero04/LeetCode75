/*
    Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
*/

function increasingTriplet(nums) {
  let firstNumInSeq = Infinity;
  let secondNumInSeq = Infinity;

  for (let num of nums) {
    if (num > secondNumInSeq && num > firstNumInSeq) return true;

    if (num > firstNumInSeq) {
      secondNumInSeq = num;
    } else {
      firstNumInSeq = num;
    }
  }
  return false;
}

/*
Completed with help.

Algorithm:
- Set two variables for the first and second numbers in the triplet (nums[i] and nums[j]). They will be used to keep track of the smallest and next smallest number on the triplet.
- As we traverse through the array:
-- Check if we have reached an increasing triplet
-- If not, we need to figure out where the current number stands with the first and second numbers of the sequence
-- If the current number is greater than the first number of the sequence, then we set it to the second number of the sequence.
-- If the current number is not greater than the first number of the sequence, then we set it to the first number of the sequence.
-- We continue this process, slowly building a potential triplet to check against our success condition.
*/

module.exports = increasingTriplet;
