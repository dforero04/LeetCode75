/*
There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.
*/

function highestAltitude(gain) {
  // Since the biker starts at 0 altitude, the max will always be at least 0
  let maxAlt = 0;
  // Keep track of the previous altitude to be used with the following gain
  let prevAlt = 0;

  // incrementally calculate the new altitudes and compare again maxAlt
  for (let i = 0; i < gain.length; i++) {
    let curAlt = prevAlt + gain[i];
    if (curAlt > maxAlt) maxAlt = curAlt;
    prevAlt = curAlt;
  }

  return maxAlt;
}

/*
Completed by myself. Intuitive algorithm.
*/

module.exports = highestAltitude;
