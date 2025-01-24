// Nearest smallest from left
// find the smallest from the lest

function nearestSmallestLeft(input) {
    let stack = [];
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        while (stack.length > 0 && stack[stack.length - 1] >= element) {
            stack.pop()
        }
        if (stack.length === 0) {
            result.push(-1)
        } else {
            result.push(stack[stack.length - 1])
        }
        stack.push(element)
    }
    return result
}

let input = [4, 5, 2, 10, 8];
// output = -1, 4, -1, 2, 2

console.log(nearestSmallestLeft(input))