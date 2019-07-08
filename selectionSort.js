function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let value = 0; value < arr.length; value++) {
    if (arr[value] < smallest) {
      smallest = arr[value];
      smallestIndex = value;
    }
  }
  /**
   * using for ... in
   */
  //   for(value in arr){
  //     if(arr[value] < smallest){
  //       smallest = arr[value];
  //       smallestIndex = value
  //     }
  //   }


  /**
   * using Array.prototype.forEach
   */
  //   arr.forEach(function(item, index){
  //    if(item < smallest){
  //     smallest = item;
  //      smallestIndex = index
  //    }
  // })

  return smallestIndex;
}

function selectionSort(oldArr) {
  let newArr = [];

  //you need to saved the length of the initial array
  // so that as you splice, the for loop does not stop midway
  let length = oldArr.length

  for (let value = 0; value < length; value++) {
    let smallest = findSmallest(oldArr);
    let temp = oldArr.splice(smallest, 1); // remove smallest item from old array
    newArr.push(temp[0]); // build new array with latest smallest item
  }
  return newArr;
}

my_list = [11, 2, 23, 340, 5, 7, 9, 1, 18, 13, 29, 1];

// console.log(findSmallest(my_list));

console.log(selectionSort(my_list));
