class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    // Function to get the index of the parent node
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    // Function to get the index of the left child node
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    // Function to get the index of the right child node
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    // Function to swap two elements in the heap
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    // Function to insert a new element into the heap
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    // Function to maintain the heap property by moving the newly added element up
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
      while (currentIndex > 0) {
        let parentIndex = this.getParentIndex(currentIndex);
        if (this.heap[currentIndex] < this.heap[parentIndex]) {
          this.swap(currentIndex, parentIndex);
          currentIndex = parentIndex;
        } else {
          break;
        }
      }
    }
  
    // Function to extract the minimum element from the heap
    extractMin() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
  
      const minValue = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return minValue;
    }
  
    // Function to maintain the heap property by moving the root element down
    heapifyDown() {
      let currentIndex = 0;
      while (currentIndex < this.heap.length) {
        let leftChildIndex = this.getLeftChildIndex(currentIndex);
        let rightChildIndex = this.getRightChildIndex(currentIndex);
        let smallestChildIndex = null;
  
        if (leftChildIndex < this.heap.length) {
          smallestChildIndex = leftChildIndex;
          if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
            smallestChildIndex = rightChildIndex;
          }
        }
  
        if (smallestChildIndex === null || this.heap[currentIndex] < this.heap[smallestChildIndex]) {
          break;
        }
  
        this.swap(currentIndex, smallestChildIndex);
        currentIndex = smallestChildIndex;
      }
    }
  }
  