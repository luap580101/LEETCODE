// 每天練習 getTodayPractise(第一題,最後一題,要幾題)

const getTodayPractise = (first, last, num) => {
  let total = last - first + 1;
  if (num > total) {
    return "Fail";
  }

  const arr = [];

  //   console.log(arr.length);
  //   console.log(num);

  while (arr.length !== num) {
    let newQuestion = Math.round(Math.random() * (total - 1) + 1);
    // console.log(newQuestion);
    if (arr.includes(newQuestion)) {
      continue;
    }
    arr.push(newQuestion);
    // console.log(arr);
  }
  return arr;
};
// console.log(getTodayPractise(1, 5, 5));
console.log(getTodayPractise(1, 150, 3));
