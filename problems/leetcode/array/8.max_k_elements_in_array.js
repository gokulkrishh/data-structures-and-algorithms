/* Problem: Given an array of integers of size ‘n’. Calculate the maximum sum of ‘k’ consecutive elements in the array.

  Example 1:
    Input: [100, 200, 300, 400], k = 2
    Output : 700

  Example 2:
    Input: [1, 4, 2, 10, 23, 3, 1, 0, 20] k = 4
    Output : 39

*/

//  Brute Force Approach using nested for-loops
var maxSumOfKElements = function (arr, k) {
  var maxSum = 0;
  if (arr.length === 0 || k < 1) return maxSum;

  for (var i = 0; i < arr.length - k + 1; i++) {
    var tempSum = 0;
    for (var j = 0; j < k; j++) {
      tempSum += arr[i + j];
      maxSum = Math.max(maxSum, tempSum);
    }
  }

  return maxSum;
}

maxSumOfKElements([100, 200, 300, 400], 2); // 700

// Time Complexity: O(N*K), N is number of elements in Array

// Optimized version below

// Now using Window Sliding Technique, we can solve this in O(N) complexity
// More - https://stackoverflow.com/questions/8269916/what-is-sliding-window-algorithm-examples

var maxSumOfKElements = function (arr, k) {
  var maxSum = 0;
  if (arr.length === 0 || k < 1) return maxSum;

  // First find the max sum for 'K' elements in the given array
  for (var i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  // Move by one unit and calculate sum for 'K' elements in array
  // Compare current sum with max, if > replace max else move to next unit.
  // Repeat until the end.

  var currentSum = max;
  for (var i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k]; // To get current sum of K elements, we are subtracting the previous element + adding new sum to current sum
    maxSum = Math.max(currentSum, max);
  }

  return maxSum;
}

maxSumOfKElements([100, 200, 300, 400], 2); // 700

// Time Complexity: O(N)
