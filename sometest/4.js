// Have the function StringPeriods(str) take the str parameter being passed and determine if there is some substring K that can be repeated N > 1 times to produce the input string exactly as it appears. Your program should return the longest substring K, and if there is none it should return the string -1.

// For example: if str is "abcababcababcab" then your program should return abcab because that is the longest substring that is repeated 3 times to create the final string. Another example: if str is "abababababab" then your program should return ababab because it is the longest substring. If the input string contains only a single character, your program should return the string -1.

function StringPeriods(str) {
  // code goes here
  if (str.length == 1) {
    return "-1";
  }
  let string = "",
    result = "",
    current = 0;
  // 最長也不可能超過一半
  while (current < str.length / 2) {
    // console.log(`current:${current}, srting.len: ${string.length}`);
    let vaild = true;
    string += str[current];
    // 假設都存在 且開始逐步遍查
    for (let i = current + 1; i < str.length; i += string.length) {
      // console.log(
      //   `string: ${string}, str.substr: ${str.substr(i, string.length)}`
      // );
      // 開始比對 只有一個就往後找一個，複數則是先選擇完，那之後的同等數量字串
      // 沒有的話就中斷 要是有的話 跳去if繼續做判斷
      if (string != str.substr(i, string.length)) {
        vaild = false;
        break;
      }
    }
    // console.log(`vaild: ${vaild}`);
    // 這邊是確定有重複，把每次重複的長度做比較，保留最長的
    if (vaild && string.length > result.length) {
    // console.log(`string: ${string}, result: ${result}`);
      result = string;
    }
    current++;
  }

  if (result.length >= 1) {
    return result;
  } else {
    return "-1";
  }
}

// keep this function call here
console.log(StringPeriods("abababababab"));
console.log(StringPeriods("abcxabc"));
console.log(StringPeriods("cabcabcc"));
console.log(StringPeriods("gg"));
