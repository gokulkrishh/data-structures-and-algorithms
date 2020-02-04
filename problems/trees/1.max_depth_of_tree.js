/* Problem: Given a binary tree, find its maximum depth.

  Note: The maximum depth of a binary tree is the number of nodes along the longest path from the root node down to the farthest leaf node.

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

function maxDepth(A) {
  function traverse(A) {
    if (!A) return 0;
    else {
      return 1 + Math.max(traverse(A.left), traverse(A.right))
    };
  }
  return traverse(A);
}

maxDepth({ data: 1, left: { data: 2, left: null, right: null }, right: null }); // 2

// Time Complexity: O(N) as we are traversing almost to deep to the tree
