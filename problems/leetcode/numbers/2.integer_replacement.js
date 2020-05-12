/* Problem: Given a positive integer n and you can do operations as follow:

  1. If n is even, replace n with n/2.
  2. If n is odd, you can replace n with either n + 1 or n - 1.

  Example 1:
    Input: 8
    Output: 3
    Explanation: 8 -> 4 -> 2 -> 1

  Example 2:
    Input: 7
    Output: 4
    Explanation: 7 -> 8 -> 4 -> 2 -> 1 (or) 7 -> 6 -> 3 -> 2 -> 1
*/

// Using recursion with O(1) extra space

var integerReplacement = function (n) {
  if (n === 0) return 1;
  else if (n === 1) return 0;

  var getMinCount = function (n, count) {
    if (n === 1) {
      return count;
    }
    else if (n % 2 === 0) {
      n = n / 2;
      return getMinCount(n, count + 1);
    }
    else {
      return Math.min(getMinCount(n + 1, count + 1), getMinCount(n - 1, count + 1));
    }
  }

  return getMinCount(n, 0);
};

integerReplacement(8); // 3
integerReplacement(992); // 11
integerReplacement(993); // 12
integerReplacement(1234); // 14

// Using recursion without O(1) extra space

var integerReplacement = function (n) {
  if (n === 0) return 1;
  else if (n === 1) return 0;

  var getMinCount = function (n) {
    if (n === 1) {
      return 0;
    }
    else if (n % 2 === 0) {
      n = n / 2;
      return 1 + getMinCount(n);
    }
    else {
      return 1 + Math.min(getMinCount(n + 1), getMinCount(n - 1));
    }
  }

  return getMinCount(n);
};

integerReplacement(8); // 3
integerReplacement(992); // 11
integerReplacement(993); // 12
integerReplacement(1234); // 14
