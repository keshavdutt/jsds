const arr = [1, -1, 5, -2, 3];
const K = 3;
console.log(largestSubarrayWithSumK(arr, K)); // Output: 4



function largestSubarrayWithSumK(arr, k) {
    let maxLength = 0;
    let cummilativeSum = 0;
    const sumMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        cummilativeSum += arr[i];

        if (cummilativeSum == k) {
            maxLength = i + 1
        }

        if (sumMap.has(cummilativeSum - k)) {
            maxLength = Math.max(maxLength, i - sumMap.get(cummilativeSum - k));
        }


        if (!sumMap.has(cummilativeSum)) {
            sumMap.set(cummilativeSum, i)
        }

    }
    return maxLength
}