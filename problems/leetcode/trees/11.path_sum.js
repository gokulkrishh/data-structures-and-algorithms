/*
  Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
  Note: A leaf is a node with no children.

  Example:Given the below binary tree and sum = 22,
        5
      / \
      4   8
    /   / \
    11  13  4
  /  \      \
  7    2      1

  return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

*/

var hasPathSum = function(root, sum) {
  var ans = 0;
  var traverse = function(root, sum, ans) {
    if (root == null) return false;
    ans += root.val;
    if (!root.left && !root.right && sum == ans) return true;
    return traverse(root.left, sum, ans) || traverse(root.right, sum, ans)
  }
  return traverse(root, sum, ans);
};

var root = {
  val: 5,
  left: { val: 4, right: null, left: { val: 11, right: { val: 2, right: null, left: null }, left: { val: 7, right: null, left: null } } },
  right: { val: 8, right: { val: 13, right: null, left: null }, left: { val: 4, right: { val: 1, right: null, left: null } } },
};

hasPathSum(root, 22); // true

// Time Complexity: O(N)
