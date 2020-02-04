/* Problem: Given an array of integers, every element appears twice except for one. Find that single one.

  Note: Your algorithm should have a linear runtime complexity O(N). Could you implement it without using extra memory?

  Example:
    Input: [1, 2, 2, 4, 5, 3, 5, 3, 10, 4, 1, 8, 8]
    Output: 10;

*/

// Using Hash Table
var findSingleNumber = function (nums) {
  if (nums.length === 1) return nums[0];
  var obj = {};
  for (var i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    }
    else obj[nums[i]]++;
  }

  for (var i in obj) {
    if (obj[i] === 1) return parseInt(i);
  }
}

findSingleNumber([1, 2, 2, 4, 5, 3, 5, 3, 10, 4, 1, 8, 8]); // 10

// Time Complexity: O(N)
// Space Complexity: O(N), as we are storing all the numbers in the array

// Using XOR
// This is how an XOR works
// 1. num ^ 0 = num
// 2. num ^ num = 0

var findSingleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  var xor = 0;
  for (var i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }

  return xor;
}

findSingleNumber([1, 2, 2, 4, 5, 3, 5, 3, 10, 4, 1, 8, 8]); // 10

// Time Complexity: O(N)
// Space Complexity: O(1)

