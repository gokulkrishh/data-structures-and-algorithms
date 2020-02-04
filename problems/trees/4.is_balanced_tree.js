/* Problem: Given a binary tree, determine if it is height-balanced.

  Note: For this problem, a height-balanced binary tree is defined as:

    A binary tree in which the depth of the two subtrees of every node never differ by more than 1.

  Example 1:
       3
      / \
      9  20
        /  \
      15   7

  Ans: True

  Example 2:

         1
        / \
      2   2
      / \
    3   3
    / \
  4   4

  Ans: False

*/

// Using Recursion
var isBalanced = function (root) {
  var getHeight = function (root, height) {
    if (!root) return height;

    var leftTree = getHeight(root.left, height + 1); // +1 as we going down the tree
    var rightTree = getHeight(root.right, height + 1); // +1 as we going down the tree

    if (leftTree < 0 || rightTree < 0 || Math.abs(leftTree - rightTree) > 1) return -1; // Math.abs to get positive number, incase if its in -ve number

    return Math.max(leftTree, rightTree); // Get Max value
  };

  // Initial height as 0
  return getHeight(root, 0) >= 0; // If retured value is > or = 0 then it is binary tree with height balanced.
}

var root1 = {
  val: 3, right: { val: 20, right: { val: 7, right: null, left: null }, left: { val: 15, right: null, left: null } }, left: { val: 9, right: null, left: null }
}

isBalanced(root); // True

var root2 = {
  val: 3, right: { val: 20, right: { val: 7, right: null, left: null }, left: { val: 15, right: null, left: null } }, left: null
}

isBalanced(root); // False

// Time Complexity: O(N) as we are traversing to N nodes to find its depth
