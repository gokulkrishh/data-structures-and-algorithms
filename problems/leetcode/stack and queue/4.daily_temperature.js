/* Problem:
  Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature.
  If there is no future day for which this is possible, put 0 instead.

  Example:
    1. given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

  Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
*/

var dailyTemperatures = function(T) {
  var stack = [];
  var arr = [];

  for (var i = T.length - 1; i >= 0; i--) {
    while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length) {
      arr.push(stack[stack.length - 1] - i);
    } else {
      arr.push(0);
    }

    stack.push(i);
  }

  return arr.reverse();
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]); // [1, 1, 4, 2, 1, 1, 0, 0]

// Time Complexity: O(N)
// Space Complexity: O(W), W is number allowed values for T[i]
