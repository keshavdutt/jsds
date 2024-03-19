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