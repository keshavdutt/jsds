// Stock span problem - consecutive smaller or equal to before it on a given day

let array = [100, 80, 60, 70, 60, 75, 85];
// output = 1,1,1,2,1,4,6
// output as per ngl = -1, 100, 80, 80, 70, 80, 100 => index -1, 0, 1, 1, 3, 1, 0


class Stack {
    constructor() {
        this.items = []
    }
    push = (element) => { this.items.push(element) }
    pop = () => {
        if (this.items == 0) return "undefined"
        return this.items.pop();
    }
    peek = () => { return this.items[this.items.length - 1] }
    isEmpty = () => { return this.items.length == 0 }
}

let kd = new Stack()
let temparray = [];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (kd.isEmpty()) {
        // temparray.push(-1, i)
        temparray.push(-1)

    } else if (!kd.isEmpty() && kd.peek() > element) {
        // temparray.push(kd.peek(), i)
        temparray.push(array.indexOf(kd.peek()))

    } else if (!kd.isEmpty() && kd.peek() <= element) {
        while (!kd.isEmpty() && kd.peek() <= element) {
            kd.pop()
        }
        if (kd.isEmpty()) {
            // temparray.push(-1, i)
            temparray.push(-1)

        } else {
            // temparray.push(kd.peek(), i)
            temparray.push(array.indexOf(kd.peek()))

        }
    }
    kd.push(element)

}

for (let i = 0; i < temparray.length; i++) {
    console.log(i, temparray[i])
    temparray[i] = i - temparray[i]

}

console.log(temparray.toString())



/**
 Stock Span problem
 1. find the ngl element and store the index in temp array instead of value
 2. update the values by subtracting the value from index and print the array.
 */