/*
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

 - answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
 - answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

Note that the integers in the lists may be returned in any order.
*/

function findDifferenceOfArrays(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  for (let i of set1) {
    if (set2.has(i)) {
      set1.delete(i);
      set2.delete(i);
    }
  }

  return [[...set1.values()], [...set2.values()]];
}

/*
Completed on my own. Current algorithm is optimized slightly from my initial algorithm.
Optimizations:
 - Convert arrays to sets to get rid of duplicates
 - No need to find max length, just choose one set to traverse through

Algorithm:
 - Convert each array to a set so we can get rid of duplicate values
 - Since we got rid of duplicates, we can traverse through either set and it will work
 - Check if other set has current value in traversal set
  -- If true, delete from both sets
  -- If false, do nothing
 - Return as problem states
*/

module.exports = findDifferenceOfArrays;
