/* Problem: Happy Number

  Write an algorithm to determine if a number is "happy".

  A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

  Example:
    Input: 19
    Output: true
    Explanation:
      12 + 92 = 82
      82 + 22 = 68
      62 + 82 = 100
      12 + 02 + 02 = 1

*/

// Solution 1: Using Hashmap

var isHappyNumber = function(num) {
  var hashMap = {};

  while (num != 1 && !hashMap[num]) {
    hashMap[num] = num;
    num = num.toString().split('').reduce((sum, n) => sum + Math.pow(n, 2), 0);
  }

  return num == 1;
};

isHappyNumber(19); // True
isHappyNumber(10); // True
isHappyNumber(11); // False

// Time Complexity: O(N K), assuming while loop executes N times and K denotes counts of digits in number
// Space Complexity: O(K), K denotes counts of digits in number

// Solution 2: Using Linked List and Finding a loop in it
