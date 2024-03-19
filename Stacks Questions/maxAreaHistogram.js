// find the maximum area in the given histogram

let array = [6, 2, 5, 4, 5, 1, 6]

// [6, 2, 5, 4, 5, 1, 6]

// 1, -1, 3, -1, -1, -1

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

function findNearestSmallestRightIndex(array) {

    let stk = new Stack();
    let temparray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        const element = array[i];
        if (stk.isEmpty()) {
            temparray.push(array.length)
        } else if (!stk.isEmpty() && stk.peek() < element) {
            temparray.push(array.indexOf(stk.peek()))
        } else if (!stk.isEmpty() && stk.peek() >= element) {
            while (!stk.isEmpty() && stk.peek() >= element) {
                stk.pop()
            }
            if (stk.isEmpty()) {
                temparray.push(array.length)
            } else {
                temparray.push(array.indexOf(stk.peek()))
            }
        }
        stk.push(element)
    }
    return temparray.reverse();
}

function findNearestSmallestLeft(array) {
    let stk = new Stack();
    let temparray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (stk.isEmpty()) {
            temparray.push(-1)
        } else if (!stk.isEmpty() && stk.peek() < element) {
            temparray.push(array.indexOf(stk.peek()))
        } else if (!stk.isEmpty() && stk.peek() >= element) {
            while (!stk.isEmpty() && stk.peek() >= element) {
                stk.pop()
            }
            if (stk.isEmpty()) {
                temparray.push(-1)
            } else {
                temparray.push(array.indexOf(stk.peek()))
            }
        }
        stk.push(element)
    }
    return temparray;
}

function findWidthArray(right, left) {

    let x = right.map(function (item, index) {
        return item - left[index] - 1;
    })
    return x
}

function findArea(array, width) {
    let x = array.map((item, index) => {
        return item * width[index]
    })
    return x
}

let NslIndexRight = findNearestSmallestRightIndex(array);
let NslIndexLeft = findNearestSmallestLeft(array);

let widthArray = findWidthArray(NslIndexRight, NslIndexLeft)
let Area = findArea(array, widthArray)
const max = Area.reduce((a, b) => Math.max(a, b));


console.log(max)
