/**
 * Counts values in array recursively
 * @param {Array} arr Array of numbers
 * @return {number} Length of the array
 */

function count(arr) {
  if (arr.length === 0) {
    return 0;
  }
  arr.pop();
  return 1 + count(arr);
}

console.log(count([0, 1, 2, 3, 4, 5])); // 6
