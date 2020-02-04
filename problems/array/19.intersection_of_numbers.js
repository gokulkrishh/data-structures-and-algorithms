/* Problem: Given two arrays, write a function to compute their intersection.

  Example 1:
    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2]
  Example 2:
    Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    Output: [9,4]

  Note:

    Each element in the result must be unique.
    The result can be in any order.
*/

function intersection(nums1, nums2) {
  var hash = {};

  for (var num of nums1) {
    if (!hash[num]) {
      hash[num] = true;
    }
  }

  var result = [];

  for (var num of nums2) {
    if (hash[num]) {
      delete hash[num];
      arr.push(num);
    }
  }

  return result;
}

intersection([1, 2, 2, 1], [2, 2]);

// Time Complexity: O(N * M)
// Space Complexity: O(N + M)
