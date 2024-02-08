/*
Easy
Given array of ints, return true if number of occurences of each value is unique. Return false otherwise.
*/

// [1,2,3,4] - false because each int has 1 occurance, so not unique
// [1,2,2,3,3,3] - true because each int has a different amount of occurances

function unique(arr) {
  const map = new Map();
  // traverse array
  for (let i = 0; i < arr.length; i++) {
    // if num[i] is in map, increment value of key num[i]
    // if not, add to map and increment value by 1
    if (map.has(arr[i])) {
      let count = map.get(arr[i]);
      map.set(arr[i], ++count);
    } else {
      map.set(arr[i], 1);
    }
  }

  // traverse map.values and check it all unique
  const map2 = new Set();
  for (let value of map.values()) {
    if (map2.has(value)) {
      return false;
    }
    map2.add(value);
  }
  return true;
}

/*
  Time Complexity - O(n) since we iterate through input arr of n
*/

module.exports = unique;
