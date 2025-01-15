// Definition for a singly linked list node
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;  // Value of the node
        this.next = next;  // Pointer to the next node in the list
    }
}

/**
 * Reverses a singly linked list.
 * @param {ListNode} head - The head of the linked list.
 * @returns {ListNode} - The new head of the reversed linked list.
 */
function reverseLinkedList(head) {
    let prev = null;  // Initialize previous pointer to null
    let current = head;  // Start with the head of the list
    
    // Traverse the list and reverse the pointers
    while (current !== null) {
        let next = current.next;  // Temporarily store the next node
        current.next = prev;  // Reverse the current node's pointer
        prev = current;  // Move the previous pointer forward
        current = next;  // Move the current pointer forward
    }
    
    // Return the new head of the reversed list
    return prev;
}

// Sample input: 1 -> 2 -> 3 -> 4 -> null
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

// Reverse the list
let reversedHead = reverseLinkedList(head);

// Helper function to print the list
function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> ") + " -> null");
}

// Output the reversed list: 4 -> 3 -> 2 -> 1 -> null
printList(reversedHead);
