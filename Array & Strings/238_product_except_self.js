/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

///////////////////////////////////////////////////////////
// Algorithm
// - Calculate the prefix and postfix products at each index in the input array
//  -- Prefix is multiplying the value at each index by the product at the previous index
//      -- [1, 2, 3, 4] = [1, 2, 6, 24]
//  -- Postfix is the same but from the back
//      -- [1, 2, 3, 4] = [24, 24, 12, 4]
//  -- Multiply the end indices by 1
// - Traverse through the array one more time and, at each index, multiply the value of the prefix array at i - 1 by the value of the postfix array at i + 1
///////////////////////////////////////////////////////////

function productExceptSelf(nums) {
  const prefixArray = new Array(nums.length);
  const postfixArray = new Array(nums.length);
  const res = new Array(nums.length);

  // Do postfix first so that you can do the prefix and final result within the same for-loop
  for (let j = nums.length - 1; j >= 0; j--) {
    postfixArray[j] =
      j === nums.length - 1 ? nums[j] : nums[j] * postfixArray[j + 1];
  }

  // Once you start to build res:
  // -- i === 0: postFixArray[i + 1] since there is no preFixArray[i-1]
  // -- i === length - 1: preFixArray[i-1] since there is no postFixArray[i+1]
  for (let i = 0; i < nums.length; i++) {
    prefixArray[i] = i === 0 ? nums[i] : nums[i] * prefixArray[i - 1];
    if (i === 0) res[i] = 1 * postfixArray[i + 1];
    else if (i === nums.length - 1) res[i] = 1 * prefixArray[i - 1];
    else res[i] = prefixArray[i - 1] * postfixArray[i + 1];
  }

  return res;
}

// function productExceptSelf(nums) {
//   const frontToBack = [];
//   const backToFront = [];

//   for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
//     let frontCheck = i + 1,
//       backCheck = j - 1;
//     let acc = 1;
//     while (frontCheck < nums.length) {
//       acc *= nums[frontCheck];
//       frontCheck++;
//     }
//     frontToBack.push(acc === -0 ? 0 : acc);

//     acc = 1;
//     while (backCheck >= 0) {
//       acc *= nums[backCheck];
//       backCheck--;
//     }
//     backToFront.unshift(acc === -0 ? 0 : acc);
//   }

//   for (let i = 0; i < nums.length; i++) {
//     frontToBack[i] =
//       frontToBack[i] === 0 || backToFront[i] === 0
//         ? Math.abs(frontToBack[i] * backToFront[i])
//         : frontToBack[i] * backToFront[i];
//   }

//   return frontToBack;
// }

/*
    My initial solution works, but it's not optimized.
    My Initial Algorithm:
    - Outer for loop: initialize 2 pointers, front and back
    - Inner while loops: find product of i + 1 to n, and i - 1 to 0.
    - Push products to temp array
    - Traverse through product arrays and multiply each index together.

    NOTES: Not optimized. With large input array, times out.
*/

module.exports = productExceptSelf;
