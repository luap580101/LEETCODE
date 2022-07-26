// Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
function check(str, char) {
  // console.log(str.length);
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    // console.log(i);
    if (str.charAt(i) == char && i >= 1 && i <= 3) {
      result = 1;
    //   console.log(result);
      break;
    }
  }
  if (result == 1) {
    return true;
  } else {
    return false;
  }
}

console.log(check("Python", "y"));
console.log(check("JavaScript", "a"));
console.log(check("Console", "o"));
console.log(check("Console", "C"));
console.log(check("Console", "e"));
console.log(check("JavaScript", "S"));
