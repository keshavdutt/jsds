// Example usage:
const arr2 = [2, 1, 5, 1, 3, 2];
const k2 = 4;
console.log(findSumOfSubarrays(arr2, k2)); // Output: [9, 10, 11]

function findSumOfSubarrays(arr, k) {
    let currentSum = 0;
    let result = [];

    for (let i = 0; i < k; i++) {
        currentSum = currentSum + arr[i]
    }
    result.push(currentSum)

    for (let i = k; i < arr.length; i++) {
        currentSum = currentSum + arr[i] - arr[i - k];
        result.push(currentSum)
    }

    return result;
}