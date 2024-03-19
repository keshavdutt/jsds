// Nearest greater from left
// find the nearest greater from the left

let some = [1, 5, 6, 7, 10, 9, 3]
// output => -1, -1, 3, -1
// let some = [1, 3, 2, 4]
let stack = []
let temparray = [];


for (let i = 0; i < some.length; i++) {
    const element = some[i];
    if (stack.length == 0) {
        temparray.push(-1)
    } else if (stack.length > 0 && stack[stack.length - 1] > element) {
        temparray.push(stack[stack.length-1])
    } else if (stack.length > 0 && stack[stack.length -1 ] <= element) {
        while (stack.length > 0 && stack[stack.length -1 ] <= element) {
            stack.pop()
        }
        if(stack.length == 0 ) {
            temparray.push(-1)
        } else {
            temparray.push(stack[stack.length-1])
        }
    }
    stack.push(element);
    console.log('Run at every iteration', stack)
}
console.log(stack)
console.log(temparray)