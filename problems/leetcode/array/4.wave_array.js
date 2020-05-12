/* Problem: Given an array of integers, sort the array into a wave like array and return it,

  Note: In other words, arrange the elements into a sequence such that a1 >= a2 <= a3 >= a4 <= a5.....

  Example:

  Input: [1, 2, 3, 4]

  One possible Ouput : [2, 1, 4, 3]
  Another possible Ouput : [4, 1, 3, 2]

*/

function waveArray(A) {
  var sortedArr = A.slice().sort(function (a, b) { return a - b }); // .slice to make clone the array, just to avoid infinite loop

  for (var i = 0; i < A.length - 1; i++) {
    var temp = sortedArr[i];
    sortedArr[i] = sortedArr[i + 1];
    sortedArr[i + 1] = temp;
  }

  return sortedArr;
}

waveArray([1, 2, 3, 4]); // [2, 1, 4, 3]

// Time Complexity: O(N)
