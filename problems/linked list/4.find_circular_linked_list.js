/* Problem: Given a linked list, determine if it has a cycle in it.

  Note: Solve it without using extra space

*/

// Two Pointers Method

function isCircular(node) {
  if (!node) return false;
  if (!node.next) return false;

  var pointer1 = node;
  var pointer2 = node.next;

  // If pointer1 and pointer2 are equal, it has a cycle then return true
  // else no cycle then return false
  while (pointer1 !== pointer2) {
    if (pointer2 === null || pointer2.next === null) return false; // Not circular linked list, if next node is null
    pointer1 = pointer1.next;
    pointer2 = pointer1.next.next;
  }

  return true;
}

var list1 = { val: 1, next: { val: 2, next: { val: 1, next: { val: 2, next: {} } } } }; // Circular list
var list2 = { val: 1, next: { val: 2, next: { val: 3, next: null } } }; // Non Circular List

isCircular(list1); // True
isCircular(list2); // False

// Time Complexity: O(N), as we are traversing N nodes
