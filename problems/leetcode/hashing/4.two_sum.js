/* Problem: Two Sum

  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  Note: You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example:

    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].

 */

// Solution 1 - Two-pass Hash Table

var twoSum = function(nums, target) {
  var hash = {};

  for (var i = 0; i < nums.length; i++) {
    var num = target - nums[i];
    if (!hash[num]) {
      hash[num] = { i };
    }
  }

  for (var i = 0; i < nums.length; i++) {
    if (hash[nums[i]] && hash[nums[i]].i !== i) return [hash[nums[i]].i, i];
  }

  return [0, 0];
};

twoSum([2, 7, 11, 15], 9); //[0, 1]

// Time Complexity: O(N)
// Space Complexity: O(N)
