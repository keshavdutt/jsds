// Nearest smallest from left
// find the smallest from the lest

let array = [4,5,2,10,8]
// output = -1, 4, -1, 2, 2

class Stack {
    constructor() {
        this.items = [];
    }
    push (elements) {
        this.items.push(elements);
    }
    pop (elements) {
        if (this.items == 0) return "undefined"
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0
    }
}

let stk = new Stack();
let temparray = [];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(stk.isEmpty()) {
        temparray.push(-1)
    } else if (!stk.isEmpty() && stk.peek() < element) {
        temparray.push(stk.peek())
    } else if (!stk.isEmpty() && stk.peek() >= element) {
        while (!stk.isEmpty() && stk.peek() >= element) {
            stk.pop()
        }
        if (stk.isEmpty()) {
            temparray.push(-1)
        } else {
            temparray.push(stk.peek())
        }
    }
    stk.push(element)
}

console.log(temparray)