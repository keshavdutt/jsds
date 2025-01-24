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


let array = [1,1,1,3,2,2,4];
/**
 * 1: 3,
 * 3: 1,
 * 2: 2,
 * 4: 1
 */

const frequencyMap = {};
array.forEach(num => {
  frequencyMap[num] = (frequencyMap[num] || 0) + 1;
});

let maxHeap = buckets.Heap(maxHeapCompare);


for(const [num, value] of Object.entries(frequencyMap)) {
  let pair = [value, num];
  maxHeap.add(pair);
}

while (maxHeap.size() > 0) {
  console.log(maxHeap.removeRoot()[1]);
}
