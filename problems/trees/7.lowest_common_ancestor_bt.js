/* Problem: Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the BT.

  Note: According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

  Example:

        ______6_______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5

  Output: the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

*/

// Since BT is Not BST
// Changing the little logic from BST LCA
// Check for p & q value is == root.val
// If so return root
// if both left & right is found return root as both p & q resides on left and right of root;
// else only left tree is found, return left tree or right tree (As per note)

var lowestCommonAncestor = function (root, p, q) {
  if (!root) return;
  if (p.val === root.val || q.val === root.val) return root;
  var leftTree = lowestCommonAncestor(root.left, p, q);
  var rightTree = lowestCommonAncestor(root.right, p, q);
  if (leftTree && rightTree) return root;
  return leftTree ? leftTree : rightTree;
};

var root = {
  val: 6,
  left: {
    val: 2, left: { val: 0, right: null, left: null }, left: { val: 4, right: { val: 5, right: null, left: null }, left: { val: 3, right: null, left: null } }
  },
  right: {
    val: 8, right: { left: null, val: 7, right: null }, left: { left: null, val: 9, right: null }
  }
};

var p = { val: 2, left: null, right: null };
var q = { val: 4, left: null, right: null };

lowestCommonAncestor(root, p, q); // { "val": 2, "left": { "val": 4, "right": { "val": 5, "right": null, "left": null }, "left": { "val": 3, "right": null, "left": null } } }

// Time Complexity: O(N), N is number of nodes in tree
