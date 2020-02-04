/* Problem: Given a binary tree, flatten it to a linked list in-place.

  For example, given the following tree:
            1
          / \
          2   5
        / \   \
      3   4   6

  The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6

*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Solution 1 - Without modifying root

function flattenBinaryTree(root) {
  if (!root) return null;
  var newRoot = new TreeNode(-1);
  var head = newRoot;

  function traverse(root) {
    if (!root) return null;

    head.right = new TreeNode(root.val);
    head = head.right;

    traverse(root.left);
    traverse(root.right);
  }

  traverse(root);

  return newRoot.right;
}

var root = {
  val: 1,
  left: { val: 2, left: { val: 3, left: null, right: null }, right: { val: 4, left: null, right: null } },
  right: { val: 5, left: null, right: { val: 6, left: null, right: null } }
};

flattenBinaryTree(root); // 1 -> 2 -> 3 -> 4 -> 5 -> 6

// Time Complexity: O(N)
// Space Complexity: O(N)

// Solution 2 - modifying root
function flattenBinaryTree(root) {
  if (!root) return null;

  function traverse(root) {
    if (!root) return null;

    var left = traverse(root.left);
    var right = traverse(root.right);

    if (!left) return right ? right : root;
    left.right = root.right;

    root.right = root.left;
    root.left = null;

    return right ? right : left;
  }

  traverse(root);

  return root;
}

var root = {
  val: 1,
  left: { val: 2, left: { val: 3, left: null, right: null }, right: { val: 4, left: null, right: null } },
  right: { val: 5, left: null, right: { val: 6, left: null, right: null } }
};

flattenBinaryTree(root); // 1 -> 2 -> 3 -> 4 -> 5 -> 6

// Time Complexity: O(N)
// Space Complexity: O(1)
