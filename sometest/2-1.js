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
console.log(RunLength("aaabbcddddeee"));
