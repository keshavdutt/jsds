// Find max area of rectangle in a binary matrix
// [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Input:
// 1 0 1 0 0
// 1 0 1 1 1 
// 1 1 1 1
// 1 1 0 0
// Output :
// 8

let array = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]];
let rows = array.length;
let coloumn = array[0].length;
let tempArray = [];
let max;

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


for (let j = 0; j < coloumn; j++) {
    tempArray.push(Number(array[0][j]))
}
max = tempArray.reduce((a, b) => Math.max(a, b), -Infinity);
for (let i = 1; i < rows; i++) {
    for (let j = 0; j < coloumn; j++) {
        if (array[i][j] == 0) {
            tempArray[j] = 0
        } else {
            tempArray[j] = tempArray[j] + Number(array[i][j])
        }
    }
    console.log('Max area', tempArray)
    let mAH = findAreaMAH(tempArray);
    max = Math.max(max, mAH)
}

console.log('This is the maximum area', max)


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


function findAreaMAH(array) {


    let NslIndexRight = findNearestSmallestRightIndex(array);
    let NslIndexLeft = findNearestSmallestLeft(array);

    let widthArray = findWidthArray(NslIndexRight, NslIndexLeft)
    let Area = findArea(array, widthArray)
    const max = Area.reduce((a, b) => Math.max(a, b), -Infinity);
    return max;

}