/* Problem: Given an array, rotate the array to the right by k steps, where k is non-negative.

  Example 1:
  Input: [1,2,3,4,5,6,7] and k = 3
  Output: [5,6,7,1,2,3,4]

  Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]

  Example 2:

  Input: [-1,-100,3,99] and k = 2
  Output: [3,99,-1,-100]

  Explanation:
    rotate 1 steps to the right: [99,-1,-100,3]
    rotate 2 steps to the right: [3,99,-1,-100]

  Note:
    - Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
    - Could you do it in-place with O(1) extra space?

*/

var rotate = function(nums, k) {
  var temp = [];

  for (var i = 0; i < nums.length; i++) {
    temp[(i + k) % nums.length] = nums[i];
  }

  for (var i = 0; i < nums.length; i++) {
    nums[i] = temp[i];
  }

  return nums;
};

rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5,6,7,1,2,3,4]

// Time Complexity: O(N)
// Space Complexity: O(N), temp is of same size as nums.length

// Solution 2 - Reversing numbers
var rotate = function(nums, k) {
  function reverse(nums, i, j) {
    while (i < j) {
      var temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }

  k %= nums.length;

  reverse(nums, 0, nums.length - 1); // Revering all the numbers first
  reverse(nums, 0, k - 1); // Revering first k numbers
  reverse(nums, k, nums.length - 1); // Revering the rest of the numbers (n - k)

  return nums;
};

rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5,6,7,1,2,3,4]

// Time Complexity: O(N)
// Space Complexity: O(1)

// Solution 3 - ES6 way
var rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k, nums.length));
};

rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5,6,7,1,2,3,4]

// Time Complexity: O(N)
// Space Complexity: O(1)
