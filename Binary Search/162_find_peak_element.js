/*
A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.
*/

function findPeakElement(nums) {
  let left = 0,
    right = nums.length - 1,
    mid;

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);

    // Check left neighbor; if neighbor is greater, search left side
    if (mid > 0 && nums[mid] < nums[mid - 1]) right = mid - 1;
    // Check right neighbor; if neighbor is greater, search right side
    else if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) left = mid + 1;
    // Checked both and nums[mid] is greater than both
    else return mid;
  }
}

/*
Completed with help. A key aspect of this problem was hidden in the constraints section, where nums[i] will never equal nums[i+1]. This is an important note for coming up with the appropriate solution.

This algorithm is also majorly based on Binary Search, but tweaked a little since the array is not sorted. Instead, we just binary search the side that is greater than nums[mid].

Algorithm:
- Having 2 pointers, left and right, we find the midpoint.
-- About the midpoint, in order for it not to potentially "overflow" the array, use the formula left + ((right - left) / 2)
- Check if midpoint is less than value directly to the left, AND check if midpoint is not at index 0
-- We check if index is not at 0 because it will solve the edge case of the peak being at index 0
- Check if midpoint is less than value directly to the right, AND check if midpoint is not at index nums.length - 1
-- Similar to above, we check if index is not at nums.length - 1 because it will solve the edge case of the peak being at the end of the array.
- Return mid if neither if is successful
*/

module.exports = findPeakElement;
