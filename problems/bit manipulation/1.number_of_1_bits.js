/* Problem: Write a function that takes an unsigned integer and returns the number of 1 bits it has.

  Example:

  The 32-bit integer 11 has binary representation of = 00000000000000000000000000001011

  Input: 32-bit integer 11
  Output: 3

  Input: 1000000
  Output: 7

*/

// Unoptimized version:

function findNoOneBits(A) {
  var binaryNo = A.toString(2);
  var count = 0;
  var total = 0;
  while (count < binaryNo.length) {
    if (binaryNo[count] === '1') {
      total += 1;
    }
    count++;
  }
  return total;
}

findNoOneBits(11); // 3
findNoOneBits(1000000); // 7

/*
  Time Complexity: O(n)
*/

// Optimized version below:

function findNoOneBits(A) {
  var count = 0;
  while (A > 0) {
    A &= A - 1; // (A & A - 1) - unset the last set bit in A
    count++;
  }
  return count;
}

findNoOneBits(11); // 3
findNoOneBits(1000000); // 7

/*
  Time Complexity: O(number of ones in A)
*/
