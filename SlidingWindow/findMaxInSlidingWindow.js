var maxSlidingWindow = function (nums, k) {
    const deque = []; // Deque to store indices of elements in current window
    const result = []; // To store the result (max in each window)

    for (let i = 0; i < nums.length; i++) {
        // Remove elements from the front if they are out of the window
        console.log(deque[0], i, k , i-k+1)
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove elements from the back while the current element is larger
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add current element index to the deque
        deque.push(i);

        // Once we have processed at least 'k' elements, append the max to result
        if (i >= k - 1) {
            result.push(nums[deque[0]]); // The element at the front of the deque is the largest
        }
    }

    return result;
};

// Example usage:
const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(maxSlidingWindow(arr, k)); // Output: [3, 3, 5, 5, 6, 7]
