class CircularQueue {
    constructor(size) {
        this.queue = new Array(size);
        this.maxSize = size;
        this.front = -1;
        this.rear = -1;
        this.length = 0
    }

    enqueue(element) {
        //check if the queue is full
        if (this.isFull()) {
            console.log('Queue is Already Full.');
            return;
        }
        // check if the queue is empty
        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0
        } else {
            // if queue is not empty and not full
            this.rear = (this.rear + 1) % this.maxSize;
        }
        this.queue[this.rear] = element;
        this.length++
    }

    dequeue() {
        // check if the queue is empty
        if (this.isEmpty()) {
            console.log('Queue is already empty');
            return;
        }
        // removing the item from the front of the queue
        const removedItem = this.queue[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.maxSize;
        }
        this.length--;
        return removedElement;
    }

    // Return the front element of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }
        return this.queue[this.front];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.length === 0;
    }

    // Check if the queue is full
    isFull() {
        return this.length === this.maxSize;
    }
}