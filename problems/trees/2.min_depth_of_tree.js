/* Problem: Given a binary tree, find its minimum depth.

  Note 1: The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

  Note2: The path has to end on a leaf node

  Example:
    Input:  {
      data: 1,
      left: {
        data: 2,
        left: null,
        right: null
      },
      right: null
    }

    Output: 2

    Definition for a  binary tree node:
      function TreeNode(A){
        this.data = A
        this.left = null
        this.right = null
      }
*/

function minDepth(A) {

  var traverse = function (A) {
    if (!A) return 0;

    if (!A.left && !A.right) return 1;

    if (!A.left) return traverse(A.right) + 1;

    if (!A.right) return traverse(A.left) + 1;

    return 1 + Math.min(traverse(A.left), traverse(A.right));
  }

  return traverse(A);
}

minDepth({ data: 5, left: { data: 1, left: null, right: null }, right: { data: 2, left: null, right: null } }); // 2

// Time Complexity: O(N) as we are traversing the tree only once
