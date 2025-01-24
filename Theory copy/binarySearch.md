# Binary Search

Binary Search should be considered every time you need to search for an index or element in a sorted array. If the array is not sorted, we can always sort it first before applying Binary Search.

## Templates for Binary Search

**1st Template**

```js
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(array[mid] === target) {
            return mid
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}
```

**2nd Template - Binary Search with Variation on Condition Check**

```js
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) return mid;
        if (arr[mid] < target) {
            left = mid + 1; // move left pointer
        } else {
            right = mid; // move right pointer
        }
    }

    // check if target is found
    if (left < arr.length && arr[left] === target) {
        return left; // found the target
    }

    return -1; // target not found
}
```
