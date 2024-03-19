class Queue {
    constructor() {
        this.items = [];
    }

    // insert the element at the end of the queue
    queue(element) {
        this.items.push(element);
    }

    // remove and return the element from the front of the queue
    dequeue() {
        if (!this.items.length) return "Queue is Empty";
        return this.items.shift();
    }

    // return the front element of the queue
    peek() {
        if (!this.items.length) return "Queue is Empty";
        return this.items[0];
    }

    // check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }
}


// Usage
const newQueue = new Queue();
newQueue.queue(5);
console.log(newStack.peek())