/* Problem: Given a sorted linked list, delete all duplicates such that each element appear only once.

  Example 1:
    Input: 1->1->2
    Output: 1->2

  Example 2:
    Input: 1->1->2->3->3
    Output: 1->2->3

*/

function removeDuplicates = function(head) {
  var tempList = head;

  while (tempList && tempList.next) {
    if (tempList.val === tempList.next.val) {
      tempList = tempList.next.next;
    }
    else {
      tempList = tempList.next;
    }
  }

  return head; // Head will now only have non-duplicates values
}

// Time Complexity: O(N)
// Space Complexity: O(1), since we didn't used any additional space
