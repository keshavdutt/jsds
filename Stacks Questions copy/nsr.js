// Nearest smallest from right

function nearestSmallestRight(input) {
    let stack = [];
    let result = [];

    for (let i = input.length - 1; i >= 0; i--) {
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
    return result.reverse();
}

let input = [4, 5, 2, 10, 8];
// output =  2,2,-1,8,-1

console.log(nearestSmallestRight(input))