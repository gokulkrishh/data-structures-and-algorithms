/* Problem: Given an integer, write a function to determine if it is a power of three.

  Example 1:
    Input: 27
    Output: true
  Example 2:

    Input: 0
    Output: false
  Example 3:

    Input: 9
    Output: true
  Example 4:

    Input: 45
    Output: false

  Follow up:
    - Could you do it without using any loop / recursion?

  Questions:
   - Will I get negative numbers as well ?
*/


// Solution 1 - Use ForLoop & Math.pow()

var isPowerOfThree = function(n) {
  if (n == 0 || n < 0) return false;
  else if (n == 1) return true;

  for (var i = 1; i < n; i++) {
    if (n % 3 === 0 && Math.pow(3, i) === n) return true;
    else if (Math.pow(3, i) > n ) return false;
  }
};

isPowerOfThree(9); // True
isPowerOfThree(-9); // false

// Time Complexity: O(N)

// Solution 2 - Recurrsion
var isPowerOfThree = function(n) {
  if (n == 0 || n < 0) return false;
  else {
    while (n % 3 === 0) {
      n /= 3;
    }

    return n === 1;
  }
}

isPowerOfThree(9); // True
isPowerOfThree(-9); // false

// Time Complexity: O(n)
