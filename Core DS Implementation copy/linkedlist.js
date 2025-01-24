class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null
    }

    addItem(element) {
        let node = new Node(element);
        if (this.head === null) {
            this.head.next = node;
        } else {
            let currentNode = currentNode
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node;
        }
        this.length++;
    }

    addItemAtIndex(index, element) {
        let node = new Node(element);
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;
        if (index > this.length) {
            return false
        }
        if (index === 0) {
            node.next = currentNode
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentnode;
            previousNode.next = node;
        }
        this.length++
    }

    removeItem(element) {

    }

    removeItemAtIndex(element) {

    }
}