/* Problems: Sum of Two Integers

  Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

  Example 1:
    Input: a = 1, b = 2
    Output: 3

  Example 2:
    Input: a = -2, b = 3
    Output: 1

*/

var sumOfTwoNumbers = function(a, b) {
  if (b === 0) return a;
  var sumOfTwoBits = a ^ b; // Will give sum of two bits
  var carryBits = a & b; // will give carry over bit
  return sumOfTwoNumbers(sumOfTwoBits, carryBits << 1); // << Will shift all bits to left by 1
};

sumOfTwoNumbers(1, 2); // 3

// Time Complexity: O(N)
// Space Complexity: O(N)
