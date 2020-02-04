/*  Problem: Given an array and a value, remove all instances of that value in-place and return the new length.

  Note 1: Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
  Note 2: O(1) extra memory means I can use one variable to assign some data thats all.

  Example:

    Input 1: [3, 3]
    Input 2: 3

    Output: [] & length = 0

    Input 1: [3,2,2,3]
    Input 2: 3

    Output: [2, 2] & length = 2

    Reference: In Place Algorithm - https://en.wikipedia.org/wiki/In-place_algorithm
*/

// Method 1 with out extra memory

var removeElement = function (arr, val) {
  if (arr.length === 0) return 0;
  for (var i = 0, l = arr.length; i < l; i++) {
    if (arr.length === 0) break;
    if (arr[i] === val) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr.length;
};

removeElement([3, 2, 2, 3], 3); // [2, 2] & length = 2

// Time Complexity: O(n)

// Method 2

var removeElement = function (arr, val) {
  if (arr.length === 0) return 0;
  var count = 0;
  for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i] != val) {
      arr[count++] = arr[i];
    }
  }

  return count;
};

removeElement([3, 2, 2, 3], 3); // [2, 2] & length = 2

// Time Complexity: O(n) with O(1) extra memory
