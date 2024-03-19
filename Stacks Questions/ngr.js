// // Nearest greater to right
// // find the greatest element nearest to the right

function nearestGreaterToRight(input) {
    let stack = [];
    let result = [];
    for (let i = input.length - 1; i >= 0; i--) {
        const element = input[i];
        while (stack.length > 0 && stack[stack.length - 1] <= element) {
            stack.pop()
        }
        if (stack.length == 0) {
            result.push(-1)
        } else {
            result.push(stack[stack.length - 1])
        }
        stack.push(element)
    }
    return result.reverse();
}

// function nearestGreaterToRight(input) {
//     let stack = [];
//     let result = [];

//     for (let i = input.length; i >= 0; i--) {
//         const element = input[i];
//         if (stack.length == 0) {
//             result.push(-1)
//         } else if (stack.length > 0 && stack[stack.length - 1] > element) {
//             result.push(stack[stack.length - 1])
//         } else if (stack.length > 0 && stack[stack.length - 1] <= element) {
//             while (stack.length > 0 && stack[stack.length - 1] <= element) {
//                 stack.pop()
//             }
//             if (stack.length == 0) {
//                 result.push(-1)
//             } else {
//                 result.push(stack[stack.length - 1])
//             }
//         }
//         stack.push(element);
//     }
//     return result.reverse();
// }
let input = [1, 3, 2, 4];
console.log(nearestGreaterToRight(input))