// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
let checkNum = (num1, num2) => {
  let add = num1 + num2;
//   console.log(add);
  if (add < 80 && add > 50) {
    return 65;
  } else {
    return 80;
  }
};

console.log(checkNum(30, 20));
console.log(checkNum(40, 30));
console.log(checkNum(90, 80));
