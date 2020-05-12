/*  Problem: Return the lowest index at which a value (second argument) i.e **num** should be inserted into an array (first argument)
  i.e **arr** once it has been sorted. The returned value should be a number.

  E.g: whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater than 1(index 0), but less than 2(index 1).

*/

var whereIBelong = function(arr, num) {
  arr = arr.sort(function(a, b) {
    return a - b;
  });

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > num) return i - 1;
  }

  return -1;
};

whereIBelong([1, 2, 3, 4], 1.5); // 1

// Time Complexity: O(N)
