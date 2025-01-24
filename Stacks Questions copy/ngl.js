// // Nearest greater from left
// // find the nearest greater from the left

function nearestGreaterToLeft(input) {
    let stack = [];
    let result = [];

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (stack.length == 0) {
            result.push(-1)
        } else if (stack.length > 0 && stack[stack.length - 1] > element) {
            result.push(stack[stack.length - 1])
        } else if (stack.length > 0 && stack[stack.length - 1] <= element) {
            while (stack.length > 0 && stack[stack.length - 1] <= element) {
                stack.pop()
            }
            if (stack.length == 0) {
                result.push(-1)
            } else {
                result.push(stack[stack.length - 1])
            }
        }
        stack.push(element);
        // console.log(stack)
    }
    return result;
}



function newnearestGreaterToLeft(input) {
    let stack = [];
    let result = [];
    for (let i = 0; i < input.length; i++) {
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
    return result
}


let input = [1, 5, 6, 7, 10, 9, 3];
console.log(nearestGreaterToLeft(input))
console.log(newnearestGreaterToLeft(input))