# LinkedList

Time Complexity


> [!Important Point]
>  Linear Type of Data structures



**Linked List node in Js**

```js
class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
```

**Add operation in Linked List**

- Add a node in the starting of the linked list.

```js
addAtStarting(element) {
  let newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
}
```

- Add a node in the ending of the linked list.

```js
addAtEnd(data) {
    let newNode = new Node(data);
    // check if the head is there or not
    if (!this.head) {
        this.head = newNode;
        return;
    }
    let current = this.head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = newNode;
}
```

- Add a node after a given node in the linked list.

```js
// Method to add a node after a given node in the linked list
addAfterNode(prevNodeData, data) {
    let newNode = new Node(data);
    if (!this.head) {
        console.log("List is empty");
        return;
    }
    let current = this.head;
    while (current !== null) {
        if (current.data === prevNodeData) {
            newNode.next = current.next;
            current.next = newNode;
            return;
        }
        current = current.next;
    }
    console.log("Given node not found in the list");
}
```

**Delete operation in Linked List**

- Delete a node in the starting of the linked list.

```js
// Method to delete a node at the beginning of the linked list
deleteAtBeginning() {
    if (!this.head) {
        console.log("List is empty. Nothing to delete.");
        return;
    }
    this.head = this.head.next;
}
```

- Delete a node in the ending of the linked list.

```js
// Method to delete a node at the end of the linked list
deleteAtEnd() {
    if (!this.head) {
        console.log("List is empty. Nothing to delete.");
        return;
    }
    if (!this.head.next) {
        // If there's only one node in the list
        this.head = null;
        return;
    }
    let current = this.head;
    let prev = null;
    while (current.next !== null) {
        prev = current;
        current = current.next;
    }
    prev.next = null;
}
```

- Delete a node after a given node in the linked list.

```js
// Method to delete a node after a given node in the linked list
deleteAfterNode(prevNodeData) {
    if (!this.head) {
        console.log("List is empty");
        return;
    }
    let current = this.head;
    while (current !== null && current.data !== prevNodeData) {
        current = current.next;
    }
    if (current === null || current.next === null) {
        console.log("Given node not found or it is the last node");
        return;
    }
    current.next = current.next.next;
}
```

- Remove all elements from a linked list of integers that have value val.

```js
const removeElements = function(head, val) {
    // Create a dummy node to handle cases where the head node needs to be removed
    let dummy = new ListNode(-1);
    dummy.next = head;

    let prev = dummy;
    let current = head;

    while (current !== null) {
        if (current.val === val) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }

    return dummy.next; // Return the head of the modified linked list
};
```

**Reverse a given Linked List**

```js
var reverseList = function (head) {
    let prev = null
    let curr = head;
    while (curr !== null) {
        let next = curr.next;
        curr.next = prev
        prev = curr;
        curr = next
    }
    return prev
};
```

```js
function reverseLinkedList(head) {
  // Base case: if head is null or only one node is left
  if (!head || !head.next) {
    return head;
  }

  // Recursively reverse the rest of the linked list
  const reversedListHead = reverseLinkedList(head.next);

  // Reverse the pointers
  head.next.next = head;
  head.next = null;

  // Return the new head of the reversed list
  return reversedListHead;
}
```

**Find the middle point in the Linked List**

```js
function findMiddlePoint(head) {
  if (!head) {
    return null; // Handle edge case: empty list
  }

  let slow = head;
  let fast = head;

  // Move fast pointer two nodes at a time and slow pointer one node at a time
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // At this point, slow pointer is at the middle
  return slow;
}
```

**Find the nth element in the Linked List**

```js
function findNthElement(head, n) {
  if (!head) {
    return null; // Handle edge case: empty list
  }

  let count = 1;
  let current = head;

  // Traverse the list until the desired position or the end of the list is reached
  while (current && count < n) {
    current = current.next;
    count++;
  }

  // If count is less than n, the list is shorter than the desired position
  if (count < n || !current) {
    return null; // Position out of bounds or list ended
  }

  // Otherwise, return the value of the nth node
  return current.val;
}
```

**Merge two sorted Linked List**

```js
function mergeTwoLists(l1, l2) {
  // Create a dummy node to serve as the starting point of the merged list
  const dummy = new ListNode(-1);
  let current = dummy;

  // Traverse both lists simultaneously,
  //comparing nodes and adding the smaller one to the merged list
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Attach the remaining nodes of the non-empty list
  current.next = l1 || l2;

  // Return the head of the merged list (excluding the dummy node)
  return dummy.next;
}
```

**Linked list has cycle**

```js
function hasCycle(head) {
  if (!head || !head.next) {
    return false; // If the list is empty or has only one node, there can't be a cycle
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    // If the fast pointer reaches the end of the list (or null), there is no cycle
    if (!fast || !fast.next) {
      return false;
    }
    slow = slow.next; // Move slow pointer one step
    fast = fast.next.next; // Move fast pointer two steps
  }

  return true; // If slow and fast pointers meet, there is a cycle
}
```

**Two Pointer Technique in Linked List**

```js
// Initialize slow & fast pointers
ListNode slow = head;
ListNode fast = head;
/**
 * Change this condition to fit specific problem.
 * Attention: remember to avoid null-pointer error
 **/
while (slow != null && fast != null && fast.next != null) {
    slow = slow.next;           // move slow pointer one step each time
    fast = fast.next.next;      // move fast pointer two steps each time
    if (slow == fast) {         // change this condition to fit specific problem
        return true;
    }
}
return false;   // change return value to fit specific problem
```
