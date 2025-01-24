

class Stack {
    constructor() {
        this.items = [];
    }
    push(elements) {
        this.items.push(elements)
    }
    pop(elements) {
        if (this.items.length == 0) return "undefined"
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0
    }
}

class MyQueue {

    constructor() {
        this.firstStack = new Stack();
        this.secondStack  = new Stack();
        this.tempValue;
    }

    push(element) {
        this.firstStack.push(element);
    }

    pop() {
        this.peek()
        this.secondStack.pop()
        return this.tempValue
    }

    peek() {
        if(this.secondStack.isEmpty()) {
            while (!this.firstStack.isEmpty()) {
                this.secondStack.push(this.firstStack.pop())   
            }
        }
        console.log(this.secondStack.peek())
        this.tempValue =  this.secondStack.peek();
    }

    isEmpty() {
        return this.firstStack.isEmpty() && this.secondStack.isEmpty()
    }

}

let kd = new MyQueue()
kd.push(2);
kd.push(10)
kd.push(11)
kd.push(12)
kd.push(13)
kd.push(23)
kd.pop()
kd.pop()

console.log(kd.pop())



console.log(kd)