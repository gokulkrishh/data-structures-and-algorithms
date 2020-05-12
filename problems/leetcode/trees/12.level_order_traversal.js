/* Problem: Binary Tree Level Order Traversal
  Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

  Example:
    - Given binary tree [3,9,20,null,null,15,7],

       3
      / \
      9  20
        /  \
      15   7

    Result: [ [3], [9,20], [15,7] ]

*/

var levelOrderTraversal = function(root) {
  if (!root) return [];
  var result = [];

  function search(root, depth) {
    if (root) {
      if (result.length < depth) {
        result[depth - 1] = [];
      }

      result[depth - 1].push(root.val);
      search(root.left, depth + 1);
      search(root.right, depth + 1);
    } else return;
  }

  search(root, 1);

  return result;
};

var root = {
  val: 15,
  left: {
    val: 5,
    left: {
      val: 2,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 17,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 19,
      left: null,
      right: null
    }
  }
};

levelOrderTraversal(root); // [ [ 15 ], [ 5, 17 ], [ 2, 4, 15, 19 ] ]
