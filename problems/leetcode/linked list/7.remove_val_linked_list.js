/* Problems: Remove all elements from a linked list of integers that have value val.

  Note: List will have duplicate values too.

  Example:
    Input: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
    Output: 1 --> 2 --> 3 --> 4 --> 5

  Tips: Idea here is to create new head with extra node (-1) in front and keep head ahead of new head, then if value found newNode.next = newNode.next.next;
*/


var removeElements = function (head, val) {
  var current = new ListNode(-1);
  current.next = head;
  var newNode = current;

  while (head != null) {
    if (head.val === val) {
      newNode.next = newNode.next.next;
    }
    else {
      newNode = newNode.next;
    }

    head = head.next;
  }

  return current.next;
};

var head = { val: 1, next: { val: 2, next: { val: 6, next: { val: 4, next: { val: 5, next: { val: 6, next: null } } } } } };

removeElements(head, 6); // { val: 1, next: { val: 2, next: next: { val: 4, next: { val: 5, next: null } } } };

// Time Complexity: O(N)
