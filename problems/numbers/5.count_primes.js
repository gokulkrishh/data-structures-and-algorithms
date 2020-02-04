/* Problem: Count the number of prime numbers less than a non-negative number, n.

Example:
  Input: 10
  Output: 4

  Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

  Input: 5
  Output: 2

  Explanation: There are 2 prime numbers less than 5, they are 2, 3,

*/

function countPrimes(num) {
  if (num < 2) return 0;
  var count = 0;

  function isPrime(n) {
    for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) return false;
    }

    return true;
  }

  for (var i = 2; i < num; i++) {
    if (isPrime(i)) count++;
  }

  return count;
}

countPrimes(10); // 4

// Time Complexity - O(N2)
