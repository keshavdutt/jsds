// Given are N ropes of different lengths, the task is to connect these ropes into one rope with minimum cost, 
// such that the cost to connect two ropes is equal to the sum of their lengths.

// Examples:

// Input: arr[] = {4,3,2,6} , N = 4
// Output: 29
// Explanation:

// First, connect ropes of lengths 2 and 3. Now we have three ropes of lengths 4, 6, and 5.
// Now connect ropes of lengths 4 and 5. Now we have two ropes of lengths 6 and 9.
// Finally connect the two ropes and all ropes have connected.

let bucket = require('buckets-js');

let array = [1, 2, 3, 4, 5];

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

let minHeap = bucket.Heap(minHeapCompare);

for (let i = 0; i < array.length; i++) {
  minHeap.add(array[i]);
}
let cost = 0;
let length = 0;
while (minHeap.size() > 1) {
  let first = minHeap.removeRoot();
  let second = minHeap.removeRoot();
  console.log(first, second, first + second);

  let length = first + second;
  cost = cost + length;
  minHeap.add(length);
  console.log('This is the minheap', minHeap.toArray());
}

console.log('this is the cost', cost);

console.log(minHeap.toArray());
