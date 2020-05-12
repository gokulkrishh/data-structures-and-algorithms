/* Problem: Find if Given number is power of 2 or not.

  More specifically, find if given number can be expressed as 2^k where k >= 1.

  Example:

  Input: 5070602400912917605986812821504
  Output: 1

  Input: 129
  Output: 0

*/

function powerOf2OrNot(N) {
  if (N < 2) return 0;
  var count = N;
  while (count > 0) {
    count /= 2;
    if (count === 1) return 1;
    else if ((count - Math.floor(count)) !== 0) return 0;
  }
}


powerOf2OrNot(128); // 1
powerOf2OrNot(3); // 0

/* Complexity:

  Time Complexity: O(n)

*/
