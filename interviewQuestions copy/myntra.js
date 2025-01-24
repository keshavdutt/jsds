
// input string S = aabcdabe
// Ans = cdabe

// largest unique substring with no duplicates

// function uniqueString(input) {
// 	let length = input.length;
//   let map = new Map();
//   let maxLength = 0;
//   let left = 0;
//   let right = 0;
  
//   for(right = 0; right < n; right++) {
//   	if(map.has(input[right])) {
//     	left = Math.max(map.get(input[right] + 1), left);
//     }
//     map.set(input[right], right);
    
//     if(right - left + 1 > maxLength ) {
//     	maxLength = right - left + 1;
//     }
//   }
  
//   let answer = input.slice(left, left + maxLength);
//   return answer;
// }






// -----------------------------------------------------

// Input: matrix =[
// ["1","0","1","0","0"],
// ["1","0","1","1","1"],
// ["1","1","1","1","1"],
// ["1","0","0","1","0"]]

// ["1","0","1","0","0"], 
// ["1","0","1","1","1"],
// ["1","1","1","1","1"],
// ["1","0","1","1","1"]] // output for this  = 4

// Output: 4

// function maxArea(matrix) {
	
//   let maxArea = 0;
//   let height = Array(matrix[0].length).fill(0);
  
//   for(let row of matrix) {
//   	for(let i = 0; i  < row.length; i++) {
//     	height[i] = row[i] === '1' ? height[i] + 1: 0;
//     }
//     maxArea = Math.max(maxArea, largestArea(height));
//   }
  
//   return maxArea;
// }

// function largestArea(input) {
// 	let maxArea = 0;
//   let index = 0;
//   let stack = [];
  
//   while(index < heights.length) {
//   	if(stack.length == 0 || height[index] >= height[stack[stack.length - 1]]) {
//     	stack.push(index++)
//     } else {
//     	let top = stack.pop();
//       let area = height[top] * (stack.length === 0 ? index : index - stack[stack.length -1 ] - 1);
      
//       maxArea = Math.max(maxArea, area)
      
//     }
//   }
  
//   while(stack.length > 0) {
//       let top = stack.pop();
//       let area = height[top] * (stack.length === 0 ? index : index - stack[stack.length -1 ] - 1);
//       maxArea = Math.max(maxArea, area)
//   }
//   return maxArea;
// }







