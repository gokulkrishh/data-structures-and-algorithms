/* Problem: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

  Note: Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

  Example 1:
    Input: [3,0,1]
    Output: 2

    Example 2:
      Input: [9,6,4,2,3,5,7,0,1]
      Output: 8

*/

// Solution 1 - Sorting & Finding the number
var missingNumber = function (arr) {
  if (arr.length === 1 && arr[0] === 0) return 1;

  arr = arr.sort(function (a, b) { return a - b });

  if (arr.length === 1 && arr[0] === 1) return 0;

  for (var i = arr[0]; i <= arr[arr.length - 1]; i++) {
    if (i !== arr[i]) return i;
    else continue;
  }

  return i;
};

missingNumber([3, 0, 1]); // 2

// Time Complexity: O(N LOG N)
// Space Complexity: O(N)

// Solution 2 - Hashmaps

var missingNumber = function (arr) {
  if (arr.length === 1 && arr[0] === 0) return 1;

  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = 1;
  }

  for (var i = 0; i < arr.length + 1; i++) {
    if (!obj[i]) {
      return i;
    }
  }

  return -1;
};

missingNumber([3, 0, 1]); // 2
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]); // 8

// Time Complexity: O(N)
// Space Complexity: O(N)


// Solution - 3 - Using XOR Operation, as number ^ number equal 0
var missingNumber = function (arr) {
  if (arr.length === 1 && arr[0] === 0) return 1;

  var missing = arr.length;

  for (var i = 0; i < arr.length; i++) {
    missing ^= i ^ arr[i];
  }

  return missing;
}

missingNumber([3, 0, 1]); // 2
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]); // 8

// Time Complexity: O(N)
// Space Complexity: O(1)
