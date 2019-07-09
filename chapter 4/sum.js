const list = [1, 1, 2, 5, 7, 9, 11, 13, 18, 23, 29, 340];

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let first = arr.pop();
    return first + sum(arr);
  }
}

console.log(sum(list));
