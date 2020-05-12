/* Problem: Invert the given binary Tree

  Example:

  Input:
         4
        /   \
        2     7
      / \   / \
      1   3 6   9

  Output:
          4
        /   \
        7     2
      / \   / \
      9   6 3   1
*/

var invertTree = function (root) {
  if (!root) return root;

  var traverse = function (root) {
    if (!root) return null;

    if (root.left && root.right) {
      var temp1 = root.left;
      var temp2 = root.right;
      root.left = temp2;
      root.right = temp1;
    }
    else if (root.left && !root.right) {
      root.right = root.left;
      root.left = null;
    }
    else if (!root.left && root.right) {
      root.left = root.right;
      root.right = null;
    }
    else {
      root.left = null;
      root.right = null;
    }


    traverse(root.left);
    traverse(root.right);
  }

  traverse(root);

  return root;
};

var tree = {
  val: 2, right: null, left: { val: 3, right: null, left: { val: 1, right: null, left: null } }
}

invertTree(tree); // { "val": 2, "right": null, "left": { "val": 3, "right": null, "left": { "val": 1, "right": null, "left": null } } }

// Time Complexity: O(N), N is number of nodes in binary tree
