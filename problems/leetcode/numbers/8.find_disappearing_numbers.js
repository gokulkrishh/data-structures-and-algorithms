/* Problem: Find All Numbers Disappeared in an Array

  Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

  Find all the elements of [1, n] inclusive that do not appear in this array.

  Note:
  - Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

  Example:

    Input: [4,3,2,7,8,2,3,1]

    Output: [5,6]

*/

var findDisappearedNumbers = function(nums) {
  var arr = [];

  for (var i = 0; i < nums.length; i++) {
    arr[nums[i]] = true;
  }

  for (var i = 0; i < nums.length; i++) {
    if (arr[i + 1]) {
      arr[i + 1] = false;
    } else arr[i + 1] = i + 1;
  }

  arr = arr.filter((num, index) => (num ? index : null));

  return arr;
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]); // [5, 6]

// Time Complexity: O(N)
// Space Complexity: O(N)
