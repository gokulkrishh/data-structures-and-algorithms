/* Problem: Given a string, that contains special character together with alphabets (‘a’ to ‘z’ and ‘A’ to ‘Z’), reverse the string in a way that special characters are not affected.

  Example 1:
    Input:   str = "a,b$c"
    Output:  str = "c,b$a"
    Note: $ and , are not moved anywhere and only subsequence "abc" is reversed

  Example 2:
    Input:   str = "Ab,c,de!$"
    Output:  str = "ed,c,bA!$"
*/


// Solution 1
// Using temp array

var stringReversal = function (str) {
  var tempArr = [];
  var regEx = /^[A-Za-z]+$/i; // To check char is alphabet or not

  for (var i = 0; i < str.length; i++) {
    if (str[i].match(regEx)) {
      tempArr.push(str[i]);
    }
  }

  tempArr = tempArr.reverse(); // Reversing the alphabets
  var tempStr = ""; // To store the result

  for (var i = 0, j = 0; i < str.length; i++) {
    if (!str[i].match(regEx)) {
      tempStr += str[i];
    }
    else if (j < tempArr.length) {
      tempStr += tempArr[j];
      j++;
    }
  }

  return tempStr;
}

var str = "Ab,c,de!$";

stringReversal(str); // ed,c,bA!$"

// Time Complexity: O(N)
// Space Complexity: O(1)

// We can optimize even further
// Solution 2 using one traversal with two pointers (start & end)

var stringReversal = function (str) {
  var regEx = /^[A-Za-z]+$/i; // To check char is alphabet or not
  var pointer1 = 0;
  var pointer2 = str.length - 1;

  str = str.split("");

  while (pointer1 < pointer2) {
    // If not abc, then increment pointer1 and pointer2
    if (!str[pointer1].match(regEx)) {
      pointer1++;
    }
    else if (!str[pointer2].match(regEx)) {
      pointer2--;
    }
    else {
      var temp2 = str[pointer2];
      var temp1 = str[pointer1];
      str[pointer2] = temp1;
      str[pointer1] = temp2;
      pointer1++;
      pointer2--;
    }
  }

  return str.join("");
}

// Time Complexity: O(N), with one iteration
