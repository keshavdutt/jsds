function maximalRectangle(matrix) {
	
  let maxArea = 0;
  let height = Array(matrix[0].length).fill(0);
  
  for(let row of matrix) {
  	for(let i = 0; i  < row.length; i++) {
    	height[i] = row[i] === '1' ? height[i] + 1: 0;
    }
    console.log(height, 'height')

    maxArea = Math.max(maxArea, largestArea(height));
  }
  
  return maxArea;
}

function largestArea(height) {
	let maxArea = 0;
  let index = 0;
  let stack = [];
  
  while(index < height.length) {
  	if(stack.length == 0 || height[index] >= height[stack[stack.length - 1]]) {
    	stack.push(index++)
    } else {
    	let top = stack.pop();
      let area = height[top] * (stack.length === 0 ? index : index - stack[stack.length -1 ] - 1);
      
      maxArea = Math.max(maxArea, area)
      
    }
  }
  
  while(stack.length > 0) {
      let top = stack.pop();
      let area = height[top] * (stack.length === 0 ? index : index - stack[stack.length -1 ] - 1);
      maxArea = Math.max(maxArea, area)
  }
  return maxArea;
}

// Example usage
let matrix = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0']
];
console.log(maximalRectangle(matrix)); // Output: 6
