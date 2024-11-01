// Sliding Window Algorithm

// Brute force

function maxSumSubarray(arr, k) {
    let maxSum = -Infinity;

    for (let i = 0; i <= arr.length - k; i++) {
        let currentSum = 0;
        for (let j = i; j < i + k; j++) {
            currentSum += arr[j];
        }
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

// sliding window approach
function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    
    // Calculate the sum of the first window of size `k`
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide the window over the array
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k]; // Slide the window
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}


function returnAns(arr, k) {
    let l = 0; // Left pointer
    let r = 0; // Right pointer
    let tempStore = []; // Store negative numbers in the current window
    let finalAns = []; // Store results for each window

    while (r < arr.length) {
        // Add current element to tempStore if it's negative
        if (arr[r] < 0) {
            tempStore.push(arr[r]);
        }
        
        // Check if the window size is less than K
        if (r - l + 1 !== k) {
            r++; // Expand the window by moving the right pointer
        } else if (r - l + 1 === k) {
            // Window size is exactly K
            if (tempStore.length === 0) {
                finalAns.push(0); // No negatives in the window
            } else {
                finalAns.push(tempStore[0]); // First negative number in the window

                // If the leftmost element is negative, remove it from tempStore
                if (arr[l] < 0) {
                    tempStore.shift(); // Remove the first negative number
                }
            }
            
            // Slide the window
            r++;
            l++;
        }
    }

    return finalAns;
}
