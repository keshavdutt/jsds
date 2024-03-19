// Nearest smallest from right

// let array = [4,5,2,10,8]
let array = [ 4, 0, 0, 3, 0 ]
// output 2,2,-1,8,-1

class Stack {
    constructor() {
        this.items = [];
    }
    push (elements) {
        this.items.push(elements)
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

for (let i = array.length-1; i >= 0; i--) {
    const element = array[i];
    if (stk.isEmpty()) {
        temparray.push(-1)
    } else if (!stk.isEmpty() &&  stk.peek() < element) {
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

console.log(temparray.reverse())