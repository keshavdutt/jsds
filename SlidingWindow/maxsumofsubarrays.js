// Example usage:
const arr2 = [2, 1, 5, 1, 3, 2];
const k2 = 3;
console.log(findSumOfSubarrays(arr2, k2)); // Output: [9]

function findSumOfSubarrays(arr, k) {
    if (arr.length < k) return null; // Edge case: If array length is less than K

    let maxSum = 0;
    let windowSum = 0;

    // Calculate the sum of the first window of size K
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    maxSum = windowSum;

    // Slide the window over the array
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k]; // Slide the window
        maxSum = Math.max(maxSum, windowSum); // Update maxSum if the new windowSum is higher
    }

    return maxSum;
}