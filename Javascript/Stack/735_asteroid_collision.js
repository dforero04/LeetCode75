/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
*/

function asteroidCollision(asteroids) {
  const result = [];

  for (let i = 0; i < asteroids.length; i++) {
    let cur = asteroids[i];

    // This checks if there are negative asteroids at the start of the list.
    // Negative asteroids at the front will never collide, so add them.
    if ((result.length === 0 || result[result.length - 1] < 0) && cur < 0) {
      result.push(cur);
      // If an asteroid is positive, it may still collide later, so add it.
    } else if (cur > 0) {
      result.push(cur);
      // Cur is negative. It can only collide with positive ones in the stack.
      // This else will iterate until the asteroids are stable.
    } else {
      let test = result.pop();

      // If the value off the stack is greater than the current value, we just push it back on the stack
      if (Math.abs(test) > Math.abs(cur)) result.push(test);
      // If the value off the stack is less than the current value, we decrement i so we can do another iteration with the same value
      else if (Math.abs(test) < Math.abs(cur)) {
        i--;
        // If the value off the stack is equal to the current value, they both go away
      } else {
        continue;
      }
    }
  }

  return result;
}

/*
Completed with help. My initial algorithm was on the right track, I just got lost with all the use cases. This algorithm takes some thought on edge cases. Algorithm laid out in code above.
*/

module.exports = asteroidCollision;
