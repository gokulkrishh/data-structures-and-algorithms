/* Problem: Sort a linked list in O(n log n) time using constant space complexity.

  Note:
  1. See which algorithm can sort in log n times.

  Example:

    Input:
      var head = { val: 4, next: { val: 3, next: { val: 5, next: { val: 1, next: null } } } };

    Output:
      { "val": 1, "next": { "val": 3, "next": { "val": 4, "next": { "val": 5, "next": null } } } }

*/

// Merge sort but little modified
function mergeSort(l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeSort(l1.next, l2);
    return l1;
  }
  else {
    l2.next = mergeSort(l1, l2.next);
    return l2;
  }
}

var sortedList = function (head) {
  if (head == null) return head;
  if (head.next == null) return head;

  var prev = head;
  var slow = head;
  var fast = head;

  while (fast != null && fast.next != null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  var l1 = sortedList(head);
  var l2 = sortedList(slow);

  return mergeSort(l1, l2);
}

var head = { val: 4, next: { val: 3, next: { val: 5, next: { val: 1, next: null } } } };
sortedList(head);

// Time Complexity: O(N Log N), N Log N for no of nodes in list + merge sort
// Space Complexity: O(Log N), Since we used recursion
