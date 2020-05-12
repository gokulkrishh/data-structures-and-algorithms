/* Problem: Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

  Note 1: You may assume the integer do not contain any leading zero, except the number 0 itself.
  Note 2: The digits are stored such that the most significant digit is at the head of the list.

  Example:
    Input: [9]
    Output: [1, 0]

*/

function plusOne(digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
}

plusOne([9]); // [1, 0]
plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]); // [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 5]

// Time Complexity: O(N)
