/* tree1roblem: Given two binary trees, write a function to check if they are the same or not.

  Note: Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

  Example 1:
    Input:     1         1
              / \       / \
            2   3     2   3
    Output: true

  Example 2:
    Input:     1         1
              /           \
            2             2
    Output: false
*/

// Using recursion
var isSameTree = function (tree1, tree2) {
  if (tree1 == null && tree2 == null) return true;
  else if (tree1 == null || tree2 == null) return false;

  var traverse = function (tree1, tree2) {
    if (!tree1 && !tree2) return true;
    else if (!tree1 || !tree2) return false;
    else if (tree1.val !== tree2.val) return false;
    return traverse(tree1.left, tree2.left) && traverse(tree1.right, tree2.right);
  }

  return traverse(tree1, tree2);
};

var tree1 = { val: 1, left: { val: 1, left: null, right: null }, right: null };
var tree2 = { val: 1, left: null, right: { val: 1, left: null, right: null } };

isSameTree(tree1, tree2); // False

var tree1 = { val: 1, left: { val: 1, left: null, right: null }, right: null };
var tree2 = { val: 1, left: { val: 1, left: null, right: null }, right: null };

isSameTree(tree1, tree2); // True

// Time Complexity: O(T1), where T1 is tree1 and T2 is tree2, where T1 < T2

// Using iteration

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  else if (!p || !q) return false;
  var pArr = [p]; // insert p
  var qArr = [q]; // insert q
  // We are going to use Queue based DataStructure (FIFO) to solve in iteration
  while (pArr.length != 0 && qArr.length != 0) {
    var tempP = pArr[0]; // Get first value as its Queue
    var tempQ = qArr[0]; // Get first value as its Queue
    // If val is not equal no need to proceed further, return false
    if (tempP.val !== tempQ.val) return false;

    pArr.pop(); // Else its equal then remove from queue
    qArr.pop(); // Else its equal then remove from queue

    // if left node is present in both tree, push it else if present only in either of them return false
    if (tempP.left && tempQ.left) {
      pArr.push(tempP.left);
      qArr.push(tempQ.left);
    }
    else if (tempP.left || tempQ.left) return false;

    // if right node is present in both tree, push it else if present only in either of them return false
    if (tempP.right && tempQ.right) {
      pArr.push(tempP.right);
      qArr.push(tempQ.right);
    }
    else if (tempP.right || tempQ.right) return false;
  }

  return true;
};


var tree1 = { val: 1, left: { val: 1, left: null, right: null }, right: null };
var tree2 = { val: 1, left: null, right: { val: 1, left: null, right: null } };

isSameTree(tree1, tree2); // False

var tree1 = { val: 1, left: { val: 1, left: null, right: null }, right: null };
var tree2 = { val: 1, left: { val: 1, left: null, right: null }, right: null };

isSameTree(tree1, tree2); // True

// Time Complexity: O(T1 + T2), T1, T2 is number of nodes in two tree
