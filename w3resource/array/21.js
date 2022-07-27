// Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.

// Sample Data:
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]

const expandArr = (arr, result) => {
  if (!result) {
    result = [];
  }
  //   console.log(result);

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    // console.log(typeof(arr[i]));
    if (arr[i].constructor == Array) {
      expandArr(arr[i], result);
    } else {
      //   console.log(arr[i]);
      result.push(arr[i]);
      //   console.log(result);
    }
  }
  return result
};

let arr1 = [1, [2], [3, [[4], [5]]]];
console.log(expandArr(arr1));