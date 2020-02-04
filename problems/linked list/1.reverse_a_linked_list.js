/* Problem: Reverse a linked list. Do it in-place and in one-pass.

  Example:

    Input: 1->2->3->4->5->NULL

    Output: 5->4->3->2->1->NULL

*/

// A - is the HEAD NODE of the linked list

function reverseLinkedList(A) {
  if (!A.next) return A;

  var current = A; // CURRENT NODE as HEAD
  var prev = null; // prev node as NULL
  var next;

  while (current !== null) {
    next = current.next; // Getting the NEXT NODE as reference before reversing
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// Time Complexity = O(N)
