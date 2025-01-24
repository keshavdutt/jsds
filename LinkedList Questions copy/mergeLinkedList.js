// Merge In Between Linked Lists
// Input: list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
// Output: [10,1,13,1000000,1000001,1000002,5]
// Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.

let mergeInBetween = function (list1, a, b, list2) {
    let ptr = list1;
    for (let i = 0; i < a - 1; i++)
        ptr = ptr.next;

    let qtr = ptr.next;
    for (let i = 0; i < b - a + 1; i++)
        qtr = qtr.next;

    ptr.next = list2;
    while (list2.next)
        list2 = list2.next;
    list2.next = qtr;

    return list1;
};