/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
*/

function maxAvgSubarray(nums, k) {
  let sum = 0;
  // Find sum of first k elements to compare off of
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  // Since it is the first one subarray we looked at, set sum to max
  let max = sum;

  // Now, check the other k-length subarrays and compare to max
  for (let i = k; i < nums.length; i++) {
    // Take the current sum, subtract the value from previous subarray, and add the next value
    sum = sum - nums[i - k] + nums[i];
    if (sum > max) max = sum;
  }

  // since you have the max sum, you can now return the max avg
  return max / k;
}

/*
Completed with help. Intuitive algorithm. My initial solution worked, but was not optimized
*/

module.exports = maxAvgSubarray;
