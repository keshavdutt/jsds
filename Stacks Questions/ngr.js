// Nearest greater to right
// find the greatest element nearest to the right

let some = [1, 3, 2, 4]

// output => 3,4,4,-1
let stack = []
let temparray = [];

// for (let i = some.length - 1; i >= 0; i--) {
//     const element = some[i];
//     if (stack.length == 0) {
//         temparray.push(-1)
//     }
//     else if (stack.length > 0 && stack[stack.length - 1] > element) {
//         temparray.push(stack[stack.length - 1])
//     }
//     else if (stack.length > 0 && stack[stack.length - 1] <= element) {
//         while (stack.length > 0 && stack[stack.length - 1] <= element) {
//             stack.pop()
//         }
//         if (stack.length == 0) {
//             temparray.push(-1)
//         } else {
//             temparray.push(stack[stack.length - 1])
//         }
//     }
//     stack.push(element)
// }

for (let i = some.length - 1; i >= 0; i--) {
    const element = some[i];
    while (stack.length > 0 && stack[stack.length - 1] <= element) {
        stack.pop()
    }
    if (stack.length == 0) {
        temparray.push(-1)
    } else {
        temparray.push(stack[stack.length - 1])
    }

    stack.push(element)

}




console.log(stack)
console.log(temparray.reverse())



function