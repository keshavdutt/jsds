// google question
// function findTargetIndexInSorted(arr, target) {
//     let count = 0;
//     let occ = 0
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];

//         if (element < target) {
//             count++
//         }

//         if (element === target) {
//             occ++
//         }
//     }

//     let result = [];
//     for (let i = count; i <= occ; i++) {
//         result.push(i)
//     }

//     return result
// }

// // // Example usage:
// // // [1, 2, 2, 4, 5, 6]
// const unsortedArray = [4, 2, 2, 6, 1, 5]; 
// // output = [3, 1, 2, 5, 0, 4]
// const targetNumber = 2;
// const index = findTargetIndexInSorted(unsortedArray, targetNumber);
// console.log(index)


// // const unsortedArray = [4, 2, 2, 6, 1, 5];

// // function findIndicesInSortedArray(unsortedArray) {
// //     // Create an array of objects with value and original indices
// //     const indexedArray = unsortedArray.map((value, index) => ({ value, index }));

// //     // Sort the array by value, and then by original index in case of duplicates
// //     indexedArray.sort((a, b) => {
// //         if (a.value !== b.value) {
// //             return a.value - b.value;
// //         } else {
// //             return a.index - b.index;
// //         }
// //     });

// //     console.log(indexedArray)

// //     // Initialize an array to store the indices
// //     const indices = [];

// //     // Iterate through the sorted indexed array
// //     for (let i = 0; i < indexedArray.length; i++) {
// //         // Add the sorted index to the indices array
// //         indices[indexedArray[i].index] = i;
// //     }

// //     return indices;
// // }

// // const output = findIndicesInSortedArray(unsortedArray);
// // console.log(output); // Output: [3, 1, 2, 5, 0, 4]


class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeTwoLists(l1, l2) {
    // Create a dummy node to serve as the starting point of the merged list
    const dummy = new ListNode(-1);
    let current = dummy;
  
    // Traverse both lists simultaneously, comparing nodes and adding the smaller one to the merged list
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
  
  // Helper function to print the linked list
  function printList(head) {
    let curr = head;
    const result = [];
    while (curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    console.log(result.join(' -> '));
  }
  
  // Example usage:
  const l1 = new ListNode(1);
  l1.next = new ListNode(1);
  l1.next.next = new ListNode(3);
  l1.next.next.next = new ListNode(4);
  l1.next.next.next.next = new ListNode(4);
  l1.next.next.next.next.next = new ListNode(5);

  
  const l2 = new ListNode(2);
  l2.next = new ListNode(6);
  // l2.next.next = new ListNode(4);
  
  console.log("List 1:");
  printList(l1);
  console.log("List 2:");
  printList(l2);
  
  const mergedList = mergeTwoLists(l1, l2);
  console.log("\nMerged List:");
  printList(mergedList);
  