let buckets = require('buckets-js');

function Compare(a, b) {
  if (a[0] < b[0]) {
    return -1;
  }
  if (a[0] > b[0]) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

function maxHeapCompare(a, b) {
  if (a[0] < b[0]) {
    return 1;
  }
  if (a[0] > b[0]) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

let array = [5, 6, 7, 8, 9];
let k = 3;
let x = 7;
// find the k smallest number closest to x
// k = 3, x = 7
// output

let maxHeap = buckets.Heap(maxHeapCompare);

for (let i = 0; i < array.length; i++) {
  let pair = [Math.abs(x - array[i]), array[i]];
  maxHeap.add(pair);
  if (maxHeap.size() > k) {
    maxHeap.removeRoot();
  }
}

while (maxHeap.size() > 0) {
  console.log(maxHeap.removeRoot()[1]);
}
