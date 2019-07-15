/**
 * Sums values in array recursively
 * @param {Array} arr Array of numbers
 * @return {number} Sum of the numbers
 */
function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let first = arr.pop();
  return first + sum(arr);
}

const list = [1, 1, 2, 5, 7, 9, 11, 13, 18, 23, 29, 340];

console.log(sum(list)); //459
