/* Problem: Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

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

// Use the BST clue here to solve the question and do a iteration or recursion to get answer
// p, q < root then values lies in left side of the root.
// p,q > root then values lies in right side of root.
// p is on left and q is on right, then root is the answer.

var lowestCommonAncestor = function (root, p, q) {
  // p, q < root
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  // p, q > root
  else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  // p, q on left and right of the root
  else {
    return root;
  }
};

var root = {
  val: 6,
  left: {
    val: 2, left: { val: 0, right: null, left: null }, right: { val: 4, right: { val: 5, right: null, left: null }, left: { val: 3, right: null, left: null } }
  },
  right: {
    val: 8, right: { left: null, val: 7, right: null }, left: { left: null, val: 9, right: null }
  }
};

var p = { val: 2, left: null, right: null };
var q = { val: 4, left: null, right: null };

lowestCommonAncestor(root, p, q);

// Time Complexity: O(N), N is number of nodes in tree
