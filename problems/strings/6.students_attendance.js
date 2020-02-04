/* Problem: You are given a string representing an attendance record for a student. The record only contains the following three characters:
    'A' : Absent.
    'L' : Late.
    'P' : Present.

    Note: A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

    Example 1:
      Input: "PPALLP"
      Output: True

    Example 2:
      Input: "PPALLL"
      Output: False
*/

var checkRecord = function (s) {
  var L = 0;
  var A = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      A++;
      if (L <= 2) L = 0; // If its A in string and L is < 2 reset to 0
    }
    else if (s[i] === "L") {
      L++;
    }
    else {
      L = 0; // If L is not continuous, reset to 0
    }

    if (L > 2 || A > 1) return false;
  }

  return true;
};

checkRecord("PPALLP"); // True
checkRecord("PPALLLP"); // False

// Time Complexity: O(N), N is string length
