// 抽抽樂總共有五個獎項, 1,2,3 獎各只有一個, 4 獎有 3 個，5 獎有 4 個，請寫出一個程式可以「隨機」的取得「不重複」的禮物
let lotteryBox = [1, 2, 3, 4, 4, 4, 5, 5, 5, 5];

let lottery = () => {
  let boxRemain = lotteryBox.length;
  if (boxRemain == 0){
    console.log('快住手! 已經沒有OO了');
    return '快住手! 已經沒有OO了'
  }
  // console.log(boxRemain);
  let giftIndex = Math.round(Math.random() * (boxRemain - 1));
  let gift = lotteryBox[giftIndex]
  lotteryBox = lotteryBox.filter((v, i) => {
    // console.log(`giftIndex: ${giftIndex}, i : ${i}`);
    return giftIndex !== i;
  });
  console.log(`箱子剩餘: ${lotteryBox}, 抽出的獎品為: ${gift}`);
  return (`箱子剩餘: ${lotteryBox}, 抽出的獎品為: ${gift}`)
};


for(let i = 0 ; i < 15; i ++){

    lottery();
}
