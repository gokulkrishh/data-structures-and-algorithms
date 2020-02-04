/*  Problem: Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
  n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
  Find two lines, which together with x-axis forms a container, such that the container contains the most water.

  Note: You may not slant the container and n is at least 2.

  Example:
    Input: [1,8,6,2,5,4,8,3,7]
    Output: 49

 */

var waterContainer = function(arr) {
  var water = 0;
  var start = 0;
  var end = arr.length - 1;

  while (start < end) {
    var currentContainer = Math.min(arr[start], arr[end]) * (end - start);
    water = Math.max(water, currentContainer);

    if (arr[start] <= arr[end]) start++;
    else end--;
  }

  return water;
};

waterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49

// Time Complexity: O(N)
// Space Complexity: O(1)
