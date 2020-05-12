/* Problem: Merge two sorted linked lists and return it as a new list.

  Note: The new list should be made by splicing together the nodes of the first two lists, and should also be sorted.

  Example:

    Input 1: 5 -> 8 -> 20
    Input 2: 4 -> 11 -> 15

    Output: 4 -> 5 -> 8 -> 11 -> 15 -> 20

*/

// To create a new node;
function Node(data) {
  this.data = data
  this.next = null
}

function mergeTwoLinkedList(A, B) {
  var list1 = A;
  var list2 = B;
  var newHead = new Node(-1); // Creating new head
  var mergedList = newHead; // Assigning new head to var

  while (list1 !== null || list2 !== null) {
    if (list1 == null) {
      mergedList.next = list2;
      break;
    }
    else if (list2 == null) {
      mergedList.next = list1;
      break;
    }

    var list1Data = list1.data;
    var list2Data = list2.data;

    if (list1Data <= list2Data) {
      mergedList.next = new Node(list1Data);
      list1 = list1.next;
    }
    else {
      mergedList.next = new Node(list2Data);
      list2 = list2.next;
    }

    mergedList = mergedList.next;
  }

  return newHead.next; // Has the sorted array;
}

mergeTwoLinkedList({ data: 5, next: { data: 8, next: { data: 20, next: null } } }, { data: 4, next: { data: 11, next: { data: 15, next: null } } })

// Ans = { "data": 4, "next": { "data": 5, "next": { "data": 8, "next": { "data": 11, "next": { "data": 15, "next": { "data": 20, "next": null } } } } } }

// Time Complexity = O(2N)
