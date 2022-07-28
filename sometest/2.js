// Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.

function RunLength(str) {
  var count = 0,
    result = "",
    data = str[0];

  for (var i = 0; i < str.length; i++) {
    if (str[i] == data) {
      count++;
    } else {
      result += count + data;
      data = str[i];
      count = 1;
    }
  }

  result += count + data;
  return result;
}

// keep this function call here
console.log(RunLength("aaabbcddddeee"));
