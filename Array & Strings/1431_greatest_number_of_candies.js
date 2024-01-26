/*
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.
*/

function greatestCandies(candies, extraCandies) {
  let max = 0;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) max = candies[i];
  }

  const result = [];
  for (let i = 0; i < candies.length; i++) {
    const maxCandies = candies[i] + extraCandies >= max ? true : false;
    result.push(maxCandies);
  }

  return result;
}

/*
    Completed on first try. Algorithm is pretty intuitive. Iterate candies to find max, then iterate to compare after adding extra candies.
    Time Complexity: O(n), where n is length of candies array
    Space Complexity: O(n), since we store result in array of n length
*/

module.exports = greatestCandies;
