/**
 * Returns max values in array recursively
 * @param {Array} arr Array of numbers
 * @return {number} Largest of the array
 */
function max(arr) {
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }
  let newArr = arr.slice(1);
  return arr[0] > max(newArr) ? arr[0] : max(newArr);
}

console.log(max([1, 37, 2, 3, 4, 35]))