// // google question
function findTargetIndexInSorted(arr, target) {
    let count = 0;
    let occ = 0
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < target) {
            count++
        }
        if (element === target) {
            occ++
        }
    }
    let result = [];
    for (let i = count; i <= occ; i++) {
        result.push(i)
    }
    return result;
}

// Example usage:
// [1, 2, 2, 4, 5, 6]
// output = [3, 1, 2, 5, 0, 4]
const unsortedArray = [4, 2, 2, 6, 1, 5]
const targetNumber = 2;
//output = [1, 2]
const index = findTargetIndexInSorted(unsortedArray, targetNumber);
console.log(index)