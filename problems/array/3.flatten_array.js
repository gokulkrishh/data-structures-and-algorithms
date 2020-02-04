/* Problem: Flatten the given array

  Note: Multiple level might be there in given input

  Example:
    Input: [1, 2, [3, 4, [5, [6]]], 7, 0] to [0, 1, 2, 3, 4, 5, 6, 7]

    Output: [1, 2, 3, 4, 5, 6, 7, 0]

*/

// Method 1: Using Just Recursion

function flatten(arr) {
  var temp = [];

  arr.forEach(function(val) {
    if (Object.prototype.toString.call(val) === '[object Array]') {
      temp = temp.concat(flatten(val));
    } else {
      temp.push(val);
    }
  });

  return temp;
}

flatten([1, 2, [3, 4, [5, [6]]], 7, 0]); // [1, 2, 3, 4, 5, 6, 7, 0]

// Time Complexity: O(N)
// Space Complexity: O(N)

// Method 2: Using ES6 Reduce & Recursion

function flatten() {
  return this.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
}

flatten([1, 2, [3, 4, [5, [6]]], 7, 0]); // [1, 2, 3, 4, 5, 6, 7, 0]

// Time Complexity: O(N)
// Space Complexity: O(N)

// Method 3: Using Divide & Conquer
function divide(arr) {
  if (!arr.length) return [];
  else if (arr.length === 1) {
    if (Array.isArray(arr[0])) {
      return divide(arr[0]);
    }
    return [arr[0]];
  } else {
    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
    return merge(divide(left), divide(right));
  }
}

function merge(left, right) {
  return left.concat(right);
}

divide([1, 2, [3, 4, [5, [6]]], 7, 0]); // [1, 2, 3, 4, 5, 6, 7, 0]

// Time Complexity: O(LOG N)
// Space Complexity: O(N)
