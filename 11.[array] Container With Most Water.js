// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

var maxArea = function (height) {
    let mostWater = 0;
    for (let i = 0; i < height.length; i++) {
      for (let j = i; j < height.length; j++) {
        // console.log('i',i);
        // console.log('j',j);
        let weight = j - i;
        if (height[i] > height[j]) {
          let newArea = height[j] * weight;
          if (newArea > mostWater) {
            mostWater = newArea;
          }
        } else {
          let newArea = height[i] * weight;
          if (newArea > mostWater) {
            mostWater = newArea;
          }
        }
      }
    }
    console.log(`mostWater is ${mostWater}`);
  };
  
  // maxArea([3, 2, 3]);
  maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
  maxArea([1,1])