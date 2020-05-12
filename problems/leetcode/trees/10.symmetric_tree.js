/* Problem: Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

  Example 1:
    Input:
             1
            / \
            2   2
          / \ / \
        3   4 4  3

  Output: True

  Example 2:
    Input:
      1
      / \
      2   2
      \   \
      3    3

  Output: False

*/

var isSymmetric = function (root) {
  if (!root) return true;

  var traverse = function (tree1, tree2) {
    if (!tree1 && !tree2) return true;
    else if (!tree1 || !tree2) return false;
    return (tree1.val === tree2.val) && traverse(tree1.left, tree2.right) && traverse(tree1.right, tree2.left);
  }
  return traverse(root.left, root.right);
};

var root1 = { val: 1, right: { val: 2, right: { val: 3, right: null, left: null }, left: { val: 4, right: null, left: null } }, left: { val: 2, right: { val: 4, right: null, left: null }, left: { val: 3, right: null, left: null } } };
var root1 = { val: 1, right: { val: 2, right: { val: 3, right: null, left: null }, left: { val: 4, right: null, left: null } }, left: { val: 2, right: { val: 4, right: null, left: null }, left: { val: 1, right: null, left: null } } };

isSymmetric(root1); // True
isSymmetric(root2); // False

// Time Complexity: O(N)
// Space Complexity: O(N) due to recursion
