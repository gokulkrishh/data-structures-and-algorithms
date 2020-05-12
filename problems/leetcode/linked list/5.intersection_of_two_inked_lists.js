/* Problem: Write a program to find the node at which the intersection of two singly linked lists begins.

  Example:
    List 1: a1 → a2
                       ↘
                          c1 → c2 → c3
                        ↗
    List 2: b1 → b2 → b3

    L1, L2 to intersect at node c1.

  Note:
    1. If the two linked lists have no intersection at all, return null.
    2. The linked lists must retain their original structure after the function returns.
    3. You may assume there are no cycles anywhere in the entire linked structure.
    4. Your code should preferably run in O(n) time and use only O(1) memory.
*/

// To create new list node
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var getIntersectionNode = function (headA, headB) {
  var haveIntersection = null;

  if (!headA || !headB) return haveIntersection;

  var newHeadA = new ListNode(headA.val);
  var newHeadB = new ListNode(headB.val);
  newHeadA.next = headA.next;
  newHeadB.next = headB.next;

  while (newHeadA != null && newHeadB != null) {
    var listAData = newHeadA.val;
    var listBData = newHeadB.val;

    if (listAData === listBData) {
      haveIntersection = newHeadA;
      return haveIntersection;
    }
    else if (listAData < listBData) {
      newHeadA = newHeadA.next;
    }
    else if (listAData > listBData) {
      newHeadB = newHeadB.next;
    }
  }

  return haveIntersection;
};

var headA = { val: 1, next: { val: 3, next: null } };
var headB = { val: 2, next: { val: 3, next: null } };

getIntersectionNode(headA, headB); // { val: 3, next: null }

// Time Complexity: O(N)
// Space Complexity: O(1)
