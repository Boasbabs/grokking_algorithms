my_list = [1, 3, 5, 7, 9, 11, 13, 15, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51];

function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = low + high;
    let guess = list[mid];
    if (guess === item) {
      return `Found at position: ${mid}`;
    } else if (guess > mid) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return "Not found";
}

console.log(binarySearch(my_list, 45));
