/* Problem: Given a non-empty special binary tree consisting of nodes with the non-negative value,
  where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes.

  Note: Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.
  If no such second minimum value exists, output -1 instead.

  Example:

    Input:
        2
      / \
      2   5
        / \
        4   7

    Output: 5

    Explanation: The smallest value is 2, the second smallest value is 5.
*/


function findSecondMinNode(root) {
  var left, right;

  if (!root.left) return -1;
  if (!root.right) return -1;

  if (root && root.left.val === root.val) {
    left = findSecondMinNode(root.left);
  }
  else {
    left = root.left.val;
  }

  if (root && root.right.val === root.val) {
    right = findSecondMinNode(root.right);
  }
  else {
    right = root.right.val;
  }

  if (left === -1 || right === -1) {
    return Math.max(left, right);
  }
  else {
    return Math.min(left, right);
  }
}


var root = {
  val: 2,
  left: { val: 2, right: null, left: null }
  right: {
    val: 5, left: { val: 5, right: null, left: null }, right: { val: 7, right: null, left: null }
  }
};

findSecondMinNode(root); // 5

// Time Complexity: O(N)
