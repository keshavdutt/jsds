class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (!node.right) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    search(value) {
        return this.searchNode(this.root, value)
    }

    searchNode(node, value) {
        if (!node) {
            return false
        }
        if (value === node.value) {
            return true;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value)
        } else {
            return this.searchNode(node.right, value)
        }
    }

    inorderTraversal() {
        const result = [];
        this.inorderTraversalRecurrsive(this.root, result);
        return result;

    }

    inorderTraversalRecurrsive(node, result) {
        if (node !== null) {
            this.inorderTraversalRecurrsive(node.left, result);
            result.push(node.value);
            this.inorderTraversalRecurrsive(node.right, result);
        }
    }
    preorderTraversal() {
        const result = [];
        this.preorderTraversalRecursive(this.root, result);
        return result;
    }

    preorderTraversalRecursive(node, result) {
        if (node !== null) {
            result.push(node.value);
            this.preorderTraversalRecursive(node.left, result);
            this.preorderTraversalRecursive(node.right, result);
        }
    }

    postorderTraversal() {
        const result = [];
        this.postorderTraversalRecursive(this.root, result);
        return result;
    }

    postorderTraversalRecursive(node, result) {
        if (node !== null) {
            this.postorderTraversalRecursive(node.left, result);
            this.postorderTraversalRecursive(node.right, result);
            result.push(node.value);
        }
    }

    levelOrderTraversal() {
        const result = [];
        if (!this.root) {
            return result;
        }

        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return result;
    }

    iterativePreorderTraversal() {
        const result = [];
        if (!this.root) {
            return result;
        }

        const stack = [this.root];
        while (stack.length > 0) {
            const node = stack.pop();
            result.push(node.value);
            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }
        }

        return result;
    }

    iterativeInorderTraversal() {
        const result = [];
        if (!this.root) {
            return result;
        }

        const stack = [];
        let currentNode = this.root;
        while (currentNode || stack.length > 0) {
            while (currentNode) {
                stack.push(currentNode);
                currentNode = currentNode.left;
            }
            currentNode = stack.pop();
            result.push(currentNode.value);
            currentNode = currentNode.right;
        }

        return result;
    }

    iterativePostorderTraversal() {
        const result = [];
        if (!this.root) {
            return result;
        }

        const stack1 = [this.root];
        const stack2 = [];

        while (stack1.length > 0) {
            const node = stack1.pop();
            stack2.push(node);

            if (node.left) {
                stack1.push(node.left);
            }
            if (node.right) {
                stack1.push(node.right);
            }
        }

        while (stack2.length > 0) {
            const node = stack2.pop();
            result.push(node.value);
        }

        return result;
    }
}

// Example usage:
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log(tree.search(7)); // Output: true
console.log(tree.search(11)); // Output: false
console.log(tree.inorderTraversal()); // Output: [3, 5, 7, 10, 15]
console.log(tree.preorderTraversal()); // Output: [10, 5, 3, 7, 15]
console.log(tree.postorderTraversal()); // Output: [3, 7, 5, 15, 10]
console.log(tree.levelOrderTraversal()); // Output: [10, 5, 15, 3, 7]
console.log(tree.iterativePreorderTraversal()); // Output: [10, 5, 3, 7, 15]
console.log(tree.iterativeInorderTraversal()); // Output: [3, 5, 7, 10, 15]
console.log(tree.iterativePostorderTraversal()); // Output: [3, 7, 5, 15, 10]




