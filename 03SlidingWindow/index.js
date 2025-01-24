

// find max sum subarray of size k in an array

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;

const maxSumSubArray = (input, k) => {
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += input[i];
    }
    maxSum = currentSum;
    for (let i = k; i < input.length; i++) {
        currentSum = currentSum - input[i - k] + input[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}