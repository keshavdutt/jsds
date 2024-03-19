let buckets = require('buckets-js');

function minHeapCompare(a, b) {
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

let array = [7, 10, 4, 3, 20, 15];
let k = 3;
// find the kth smallest element; k = 3
// output = 7 as 7 is the smallest element

let heap = buckets.Heap(maxHeapCompare);

for (let i = 0; i < array.length; i++) {
  heap.add(array[i]);
  if (heap.size() > k) {
    heap.removeRoot();
  }
}

console.log(heap.peek());
