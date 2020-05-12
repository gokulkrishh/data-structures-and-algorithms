/* Problem: Given a sorted array, remove the duplicates in place such that each element can appear atmost twice and return the new length.

  Note 1: Do not allocate extra space for another array, you must do this in place with constant memory.
  Note 2: Even though we want you to return the new length, make sure to change the original array as well in place.

  Example:

  Input: [1,1,1,2]
  Output: 3 and Input becomes [1, 1, 2]

*/

function removeDuplicates(A) {
  var count = 1;
  var pointer = 0;

  for (var i = 0; i < A.length; i++) {
    if (A[i] !== A[pointer]) {
      pointer++;
      A[pointer] = A[i];
      count = 1;
    }
    else {
      if (count < 2) {
        pointer++;
        count++;
        A[pointer] = A[i];
      }
      else continue;
    }
  }

  A.length = pointer + 1; // Setting the pointer length to remove moved elements

  return A.length;
}

removeDuplicates([1, 1, 1, 2]); // [1, 1, 2]
removeDuplicates([1, 1, 1, 2, 3, 3, 3, 5, 5, 5, 6, 6, 6, 7, 7, 9]); // [1, 1, 2, 3, 3, 5, 5, 6, 6, 7, 7, 9]
