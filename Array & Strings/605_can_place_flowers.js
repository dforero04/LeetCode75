/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
 */

function canPlaceFlowers(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] !== 1) {
      if (i === 0 && !flowerbed[i + 1]) {
        flowerbed[i] = 1;
        n--;
      } else if (i === flowerbed.length - 1 && !flowerbed[i - 1]) {
        flowerbed[i] = 1;
        n--;
      } else if (!flowerbed[i - 1] && !flowerbed[i + 1]) {
        flowerbed[i] = 1;
        n--;
      }
      if (n === 0) return true;
    }
  }
  return n === 0;
}

/*
    Completed on my own. Took some debugging and trial/error with various use cases.
    1st Algorithm:
    - Alter array as you traverse to keep an accurate count of flower placements.
    - If n ever equals 0, return true since all extra flowers can be planted.

    2nd Algorithm:
    - Slightly optimized flow
    - Uses a count to compare against n
*/
/*
function canPlaceFlowers(flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    // Check if current plot is empty
    if (flowerbed[i] === 0) {
      // Check if left and right plots are empty
      const emptyLeftPlot = i === 0 || flowerbed[i - 1] === 0;
      const emptyRightPlot =
        i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      // If both plots are empty, we can plant a flower here.
      if (emptyLeftPlot && emptyRightPlot) {
        flowerbed[i] = 1;
        count++;
        if (count >= n) return true;
      }
    }
  }
  return count >= n;
}
*/

module.exports = canPlaceFlowers;
