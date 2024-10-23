// nums = [5, 7, 7, 8, 8, 10], target = 8
// Output: [3, 4]

let nums = [5, 7, 7, 8, 8, 10]
let target = 8;


function findFirst(nums, target) {
    let left = 0, right = nums.length - 1;
    let firstIndex = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) {
            firstIndex = mid;
            right = mid - 1;
        } else if(nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return firstIndex;
}

function findSecond(nums, target) {
    let left = 0, right = nums.length - 1;
    let secondIndex = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) {
            secondIndex = mid;
            left = mid + 1;
        } else if(nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return secondIndex;
}