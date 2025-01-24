function maxDepth() {
    return this.maxDepthRecursive(this.root);
}

function maxDepthRecursive(node) {
    if (!node) {
        return 0;
    }

    const leftDepth = this.maxDepthRecursive(node.left);
    const rightDepth = this.maxDepthRecursive(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
}