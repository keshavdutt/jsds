function maximalSquare(matrix) {
    if (matrix.length === 0) return 0;
    
    let maxSide = 0;
    let heights = Array(matrix[0].length).fill(0);

    for (let row of matrix) {
        for (let i = 0; i < row.length; i++) {
            // Update the heights array: if the current element is '1', increase the height by 1, otherwise reset it to 0
            heights[i] = row[i] === '1' ? heights[i] + 1 : 0;
        }
        // Find the maximum side length of the square for the current histogram
        maxSide = Math.max(maxSide, largestSquareSide(heights));
    }
    
    return maxSide * maxSide; // Return the area of the largest square
}

function largestSquareSide(heights) {
    let stack = [];
    let maxSide = 0;
    let index = 0;

    while (index < heights.length) {
        if (stack.length === 0 || heights[index] >= heights[stack[stack.length - 1]]) {
            stack.push(index++);
        } else {
            let top = stack.pop();
            let height = heights[top];
            let width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
            let side = Math.min(height, width); // The largest square that can fit in this rectangle
            maxSide = Math.max(maxSide, side);
        }
    }

    while (stack.length > 0) {
        let top = stack.pop();
        let height = heights[top];
        let width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
        let side = Math.min(height, width); // The largest square that can fit in this rectangle
        maxSide = Math.max(maxSide, side);
    }
    
    return maxSide;
}

// Example usage
let matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
];
console.log(maximalSquare(matrix)); // Output: 4
