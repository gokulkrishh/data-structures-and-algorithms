/* Problem: Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

  Note: You may return any answer array that satisfies this condition.


  Example 1:
    Input: [3,1,2,4]
    Output: [2,4,3,1]
    The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted

*/

// Solution 1 - Having two temp array (oddResult, evenResult) and concat it in end

var sortArrayByParity = function(arr) {
  var evenResult = [];
  var oddResult = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenResult.push(arr[i]);
    } else {
      oddResult.push(arr[i]);
    }
  }

  return evenResult.concat(oddResult);
};

sortArrayByParity([3, 1, 2, 4]); // [2, 4, 3, 1]

// Time Complexity: O(N)
// Space Complexity: O(N)

// Solution 2 - using one temp array

var sortArrayByParity = function(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.unshift(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

sortArrayByParity([3, 1, 2, 4]); // [4, 2, 3, 1]

// Time Complexity: O(N)
// Space Complexity: O(N)

// Solution 3 - In Place

var sortArrayByParity = function(arr) {
  var tempIndex = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      var temp = arr[i];
      arr[i] = arr[tempIndex];
      arr[tempIndex] = temp;
      tempIndex++;
    }
  }

  return arr;
};

sortArrayByParity([3, 1, 2, 4]); // [4, 2, 3, 1]

// Time Complexity: O(N)
// Space Complexity: O(1)
