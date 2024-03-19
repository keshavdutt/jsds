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
}