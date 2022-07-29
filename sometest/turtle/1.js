function getTotal(num) {
  let result = 0;
  //   for (let i = 1; i <= num; i ++){
  //     // console.log(i);
  //     if(i%2 == 0){
  //         result -=i
  //     }else{
  //         result += i
  //     }}
  let halfNum = Math.floor(num / 2);

  if (num % 2 == 0) {
    result = halfNum * -1;
  } else {
    result = halfNum * -1 + num;
  }

  console.log(result);
  return result;
}

getTotal(314159265359);