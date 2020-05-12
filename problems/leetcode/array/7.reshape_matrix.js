/* Problem: In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

  Note:
    - You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.
    - The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.
    - If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

  Example 1:
    Input: [[1,2], [3,4]], r = 1, c = 4
    Output: [[1,2,3,4]]
    Explanation: The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.

  Example 2:
    Input: [[1,2], [3,4]] r = 2, c = 4
    Output: [[1,2], [3,4]]
    Explanation: There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.

*/

var matrixReshape = function (nums, r, c) {
  if (nums.length == 0) return [];
  if (r * c != nums.length * nums[0].length) return nums;
  var arr = [];

  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums[0].length; j++) {
      arr.push(nums[i][j]);
    }
  }

  var ans = [];
  for (var i = 0; i < r; i++) {
    ans[i] = arr.splice(0, c); // splice to cut the array based on number of columns
  }
  return ans;
};


matrixReshape([[1, 2], [3, 4]], 1, 4); // [[1,2,3,4]]

// Time Complexity: O(N*M)
// Space Complexity: O(N*M), as we are storing in array according to no of N & M
