/* Problems: Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

  Note: Return the duplicates in same order

  Example:

    Input 1: [1, 2, 4];
    Input 2: [1, 3, 4]

    Output: [1, 1, 2, 3, 4, 4];

*/

var mergeTwoLists = function (l1, l2) {
  var head = new ListNode(-1);
  var mergedNode = head;

  while (l1 !== null || l2 !== null) {
    if (l1 == null) {
      mergedNode.next = l2;
      break;
    }

    else if (l2 == null) {
      mergedNode.next = l1;
      break;
    }

    if (l1.val === l2.val) {
      mergedNode.next = new ListNode(l1.val);
      mergedNode.next.next = new ListNode(l2.val);
      l1 = l1.next;
      l2 = l2.next;
      mergedNode = mergedNode.next.next;
    }
    else if (l2.val > l1.val) {

      mergedNode.next = new ListNode(l1.val);
      l1 = l1.next;
      mergedNode = mergedNode.next;

    }
    else {
      mergedNode.next = new ListNode(l2.val);
      l2 = l2.next;
      mergedNode = mergedNode.next;
    }

  }

  return head.next;
};

mergeTwoLists({ data: 1, next: { data: 2, next: { data: 4, next: null } } }, { data: 1, next: { data: 3, next: { data: 4, next: null } } });

// Ans = [1, 1, 2, 3, 4, 4];

// Time Complexity = O(2N)
