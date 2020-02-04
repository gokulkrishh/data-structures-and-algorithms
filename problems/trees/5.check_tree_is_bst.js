/* Problem: Check if given binary tree is BST or not.

  Note: Assume a BST is defined as follows:

  1. The left subtree of a node contains only nodes with keys less than the node's key.
  2. The right subtree of a node contains only nodes with keys greater than the node's key.
  3. Both the left and right subtrees must also be binary search trees.

  Example 1:
       9
      / \
     6   10
        /  \
      7    12

  Output: True
  
  Example 2:
       9
      / \
     6   10
        /  \
      5    12

  Output: False
*/

// Idea here is traverse each node with max & min value

var isBST = function (root) {
  if (!root) return true;
  var left = root.left;
  var right = root.right;
  if (left && root.val <= left.val) return false;
  if (right && root.val >= right.val) return false;
  if (!isBST(root.left) || !isBST(root.right)) return false;
  return true;
};

var root = {
  val: 3,
  left: { val: 2, right: null, left: null },
  right: {
    val: 5,
    left: { val: 4, right: null, left: null },
    right: { val: 7, right: null, left: null }
  }
};

isBST(root); // True

var root = {
  val: 3,
  left: { val: 2, right: null, left: null },
  right: {
    val: 5,
    left: { val: 19, right: null, left: null }, // val is > parent node
    right: { val: 7, right: null, left: null }
  }
};

isBST(root); // False

// Time Complexity: O(N)
