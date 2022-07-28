// Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!

function SecondGreatLow(arr) {
  // code goes here
  arr.sort(function(a, b){return a - b})
//   console.log(`arr:${arr}, [1]: ${arr[1]}, [-2]: ${arr.at(-2)}`);
console.log(`arr:${arr}, [1]: ${arr[1]}, [-2]: ${arr.slice(-2)[0]}`);
  result = `${arr[1]} ${arr.at(-2)}`
  return result;
}

// keep this function call here
console.log(SecondGreatLow([4, 90]));
