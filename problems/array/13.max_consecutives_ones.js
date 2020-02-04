/* Problem: Given a binary array, find the maximum number of consecutive 1s in this array.

  Note:
    - The input array will only contain 0 and 1.
    - The length of input array is a positive integer and will not exceed 10,000

  Example 1:
    Input: [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
*/

var findMaxConsecutiveOnes = function (nums) {
  var count = 0;
  var max = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] ^ 1 === 0) {
      count++;
      max = Math.max(max, count); // update max
    }
    else {
      count = 0;
    }
  }

  return max;
};

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]); // 3

// Time Complexity: O(N)
// Space Complexity: O(1)
