/* Problem: Push Dominoes

There are N dominoes in a line, and we place each domino vertically upright.

  In the beginning, we simultaneously push some of the dominoes either to the left or to the right.

  - After each second, each domino that is falling to the left pushes the adjacent domino on the left.

  - Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

  - When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

  - For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

  Given a string "S" representing the initial state. S[i] = 'L', if the i-th domino has been pushed to the left; S[i] = 'R', if the i-th domino has been pushed to the right; S[i] = '.', if the i-th domino has not been pushed.
  Return a string representing the final state.

  Eg:

    Example 1:
      Input: ".L.R...LR..L.."
      Output: "LL.RR.LLRRLL.."

    Example 2:
      Input: "RR.L"
      Output: "RR.L"

      Explanation: The first domino expends no additional force on the second domino.

  Note:
    0 <= N <= 10^5
    String dominoes contains only 'L', 'R' and '.'


  Reference: https://leetcode.com/problems/push-dominoes/

*/

// Solution - Using Stack

var pushDominoes = function(dominoes) {
  var stack = [];
  var str = dominoes.split('');

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char === 'L') {
      if (stack.length) {
        var left = stack.pop() + 1;
        var right = i - 1;

        while (left < right && (str[left] === '.' || str[right] === '.')) {
          if (str[left] === '.') {
            str[left] = 'R';
            left++;
          }

          if (str[right] === '.') {
            str[right] = 'L';
            right--;
          }
        }
      } else {
        var prev = i - 1;
        while (prev >= 0 && str[prev] === '.') {
          str[prev] = 'L';
          prev--;
        }
      }
    } else if (char === 'R') {
      stack.push(i);
    }
  }

  // If stack is not empty, we reached the end of dominos with "." as last
  while (stack.length) {
    var last = stack.pop();
    while (++last < str.length && str[last] === '.') {
      str[last] = 'R';
    }
  }

  return str.join('');
};

pushDominoes('.L.R...LR..L..'); // "LL.RR.LLRRLL.."

// Time Complexity: O(N)
// Space Complexity: O(N)
