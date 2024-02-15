/*
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.
*/

function maxOperations(nums, k) {
  // Initialize count and frequency map
  let count = 0;
  const map = new Map();

  for (let num of nums) {
    // Check every entry of nums that is less than k
    if (num < k) {
      // If our freq map either returned:
      // undefined, then our map doesn't have key of (k - num)
      // or 0, then we have no free values of num to use for our sum matching
      if (map.get(k - num)) {
        // but, if we pass the if, then we decrement the available amount of num in the map by 1 and increment count.
        map.set(k - num, map.get(k - num) - 1);
        count++;
      } else {
        // Similar to 2 sum, we save num to our freq map to keep track for later use. Also, we have to check map.get(num) to see if we need to add 1 to its current value or start at 1
        map.set(num, (map.get(num) || 0) + 1);
      }
    }
  }
  return count;
}
//   let i = 0,
//     j = nums.length - 1,
//     count = 0;

//   const arr = nums.sort().filter((value) => value < k);

//   while (i < j) {
//     if (nums[i] + nums[j] > k) {
//       j--;
//     } else if (nums[i] + nums[j] < k) {
//       i++;
//     } else {
//       count++;
//       i++;
//       j--;
//     }
//     // if (nums[i] < k && nums[j] < k) {
//     //   if (nums[i] + nums[j] === k) {
//     //     count++;
//     //     i++;
//     //     j--;
//     //   } else {
//     //     i++;
//     //   }
//     // } else {
//     //   if (nums[i] >= k) i++;
//     //   if (nums[j] >= k) j--;
//     // }
//   }
//   return count;
// }

/*
Completed with help. My initial algorithm was close, but kept failing some test cases.
Initial algorithm didn't fully work because it didn't account for various combinations of all values in the array.
Also, I tried to optimize by sorting the array, but that still didn't fix the above problem.
*/

module.exports = maxOperations;
