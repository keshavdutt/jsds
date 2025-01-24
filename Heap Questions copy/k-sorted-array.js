let buckets = require('buckets-js');

function Compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

function maxHeapCompare(a, b) {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

let array = [6, 5, 3, 2, 8, 10, 9];
let k = 3;
//  sort the k sorted array where k is 3
// output = 2, 3, 5, 6, 8, 9, 10

let minHeap = buckets.Heap(Compare);
let sortedArray = [];
for (let i = 0; i < array.length; i++) {
  minHeap.add(array[i]);
  if (minHeap.size() > k) {
    sortedArray.push(minHeap.removeRoot());
  }
}

while (minHeap.size() > 0) {
  sortedArray.push(minHeap.removeRoot());
}

console.log(sortedArray);
