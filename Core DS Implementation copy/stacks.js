class Stacks {
    constructor() {
        this.items = [];
    }
    // push the element in the stack
    push(element) {
        this.items.push(element);
    }
    // pop the element from the stack
    pop() {
        if (!this.items.length) return "Stack is Empty";
        return this.items.pop();
    }
    // return the top element of the stack
    peek() {
        return this.items[this.items.length - 1]
    }
    // check if the stack is empty
    isEmpty() {
        return this.items.length == 0
    }
}

// Usage

const newStack = new Stacks();
newStack.push(5);
console.log(newStack.peek())

/**
 * Array push method add element in the back of the array = [1, 2, 3]. array.push(5) => [1, 2, 3, 4, 5]
 * Array pop method remove element from the back of the array = [1, 2, 3]. array.pop() => [1, 2]
 * Array unshift method add element in the starting of the array = [1, 2, 3]. array.unshift(0) => [0, 1, 2]
 * Array shift method remove element from the start of the array = [1, 2, 3]. array.shift() => [2, 3]
 */