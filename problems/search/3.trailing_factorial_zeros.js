/* Given an integer n, return the number of trailing zeroes in n!.

  Example 1:
    Input: 3
    Output: 0
    Explanation: 3! = 6, no trailing zero.
    Example 2:

  Example: 2
    Input: 5
    Output: 1
    Explanation: 5! = 120, one trailing zero.

  Note: Your solution should be in logarithmic time complexity.
*/

// Solution 1
var trailingZeroes = function(n) {
  var getFactorial = function(n) {
   if (n === 0) return 1;
   return n * getFactorial(n-1);
  }

  var count = 0;

  if (n < 5) return count;
  if (n <= 7) return 1;

  var num = getFactorial(n);

  num = num.toString().split('');

  for (var i = num.length - 1; i > 0; i--) {
     if (num[i] > 0) break;
     else count++;
  }

  return count;
};

trailingZeroes(7);  // 5040 - Ans 1

// Time Complexity: O(N^2)

// Solution 2
// Using 5 to get the trailing zeros
// After 4 only, trailing zero start. So lets count how many 5's are in n
// with this we can get our trailing zeros

var trailingZeroes = function(n) {
  if (n < 5) return 0;
  if (n <= 9) return 1;
  var count = 0;
  while (n >= 5) {
    n = parseInt(n/5);
    count += parseInt(n);
  }
  return count;
};

// Time Complexity: O(Log N)
