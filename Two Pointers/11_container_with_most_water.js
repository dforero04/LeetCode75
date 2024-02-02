/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

function containerWithMostWater(height) {
  let i = 0,
    j = height.length - 1,
    max = 0;

  while (i < j) {
    let min = Math.min(height[i], height[j]);
    let area = min * (j - i);
    if (area > max) max = area;
    if (min === height[i]) i++;
    else j--;
  }

  return max;
}

/*
    Completed first try with no help. Intuitive algorithm.
    Algorithm:
    - Initialize two pointers starting at opposite ends of the input array. Also, initialize max variable
    - Since the water can only be filled to the lowest height, find the min between height[i] and height[j]
    - Calculate area and set to max is greater than current max
    - Move the pointer based on which value is lower
    - Return max
*/

module.exports = containerWithMostWater;
