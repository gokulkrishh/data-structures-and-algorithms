/*  Problem: Evaluate the value of an arithmetic expression in Reverse Polish Notation.

    Note: Valid operators are +, -, *, /. Each operand may be an integer or another expression.

  Examples:

    Input 1: ["2", "1", "+", "3", "*"]
    Output 1: 9
    Explanation: ((2 + 1) * 3)

    Input 2: ["4", "13", "5", "/", "+"]
    Output 2: 6
    Explanation: (4 + (13 / 5))

  Tips:
    - When ever evaluating expression comes, one of the way to solve is to use stack implementation
*/

var evalRPN = function (tokens) {
  if (tokens.length === 1) return parseInt(tokens[0]);
  var arr = [];
  for (var i = 0; i < tokens.length; i++) {
    var temp = tokens[i];
    if (temp == "+") {
      arr.push(arr.pop() + arr.pop())
    }
    else if (temp == "-") {
      var val1 = arr.pop();
      var val2 = arr.pop();
      arr.push(val2 - val1);

    }
    else if (temp == "/") {
      var val1 = arr.pop();
      var val2 = arr.pop();
      arr.push(val2 / val1 | 0)

    }
    else if (temp == "*") {
      arr.push(arr.pop() * arr.pop());

    }
    else {
      arr.push(parseInt(temp));
    }

  }

  return arr[0];
};

evalRPN(["2", "1", "+", "3", "*"]); // 9

// Time Complexity: O(N)
