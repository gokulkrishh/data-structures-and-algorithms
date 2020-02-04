/* Problem: Find the intersection of two sorted arrays or Given 2 sorted arrays, find all the elements which occur in both the arrays.

  Example:
    Input :
      A : [1 2 3 3 4 5 6]
      B : [3 3 5]

    Output : [3 3 5]

    Input :
      A : [1 2 3 3 4 5 6]
      B : [3 5]

    Output : [3 5]
*/

function findIntersection(A, B) {
  var temp = [];

  var pointer1 = 0;
  var pointer2 = 0;

  while (pointer1 < A.length && pointer2 < B.length) {
    if (A[pointer1] === B[pointer2]) {
      temp.push(A[pointer1]);
      pointer1++;
      pointer2++;
    }
    else if (A[pointer1] > B[pointer2]) {
      pointer2++;
    }
    else {
      pointer1++;
    }
  }

  return temp;
}

findIntersection([1, 2, 3, 3, 4, 5, 6, 6], [3, 5, 6]); // [3, 5, 6]
findIntersection([1 2 3 3 4 5 6], [3 5]); // [3, 5]

/* Complexity:

  Time Complexity: O(M+N), M = A, N = B

*/
