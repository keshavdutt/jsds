// min stack with extra space

let array = [18, 19, 29, 15, 16]


let stack = [];
let supportingStack = [];

class MyStack {
    constructor() {
        this.stack = [];
        this.supportingStack = [];
    }

    push(element) {
        this.stack.push(element)
        if (this.supportingStack.length == 0 || this.supportingStack[this.supportingStack.length - 1] >= element) {
            this.supportingStack.push(element)
        }
    }

    pop() {
        if (this.stack.length == 0) { return -1 }
        let temp = this.stack.pop()
        if (this.supportingStack[this.supportingStack.length - 1] == temp) {
            this.supportingStack.pop()
        }
        return temp
    }

    getMin() {
        if(this.supportingStack.length  == 0 ) return -1
        return this.supportingStack[this.supportingStack.length-1]
    }
}

// min stack in O(1)

class myNewStack {
    constructor() {
        this.minElement;
        this.s = []
    }

    push(element) {
        if (this.s.length == 0) {
            this.s.push(element)
            this.minElement = element
        } else {
            if(element > this.minElement) {
                this.s.push(element)
            } else if (element < this.minElement) {
                this.s.push(2*element-this.minElement)
                this.minElement = element
            }
        }
    }

    pop() {
        if(this.s.length == 0 ) {
            return -1
        } else {
            if (this.s[this.s.length-1] > this.minElement) {
                this.s.pop()
            } else if (this.s[this.s.length-1] < this.minElement) {
                this.minElement = 2 * this.minElement - this.s[this.s.length-1]
                this.s.pop()
            }
        }
    }

    top() {
        if(this.s.length == 0 ) {
            return - 1
        }
        if(this.s[this.s.length-1] >= this.minElement) {
            return this.s[this.s.length-1]
        } else if (this.s[this.s.length-1] < this.minElement) {
            return this.minElement;
        }
    }

    getMin() {
        if(this.s.length == 0) return -1;
        return minElement
    }
}