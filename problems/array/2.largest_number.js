/* Problem: Given a list of non negative integers, arrange them such that they form the largest number.

  Note: The result may be very large, so you need to return a string instead of an integer.

  Example:

  Input: arr[]  = [3, 30, 34, 5, 9]
  Output: string = "9534330"

  Input: arr[] = [1, 2, 4]
  Output: string = "421"

*/

function largestNumber(arr) {
  if (arr.length === 0) return arr[0];
  arr = arr.map(x => x.toString());

  arr.sort(function (a, b) {
    var left = a + b;
    var right = b + a;
    if (left < right) return 1;
    else if (left > right) return -1;
    return 0;
  });

  return arr.join("");
}

largestNumber([3, 30, 34, 5, 9]); // "9534330"

/* Complexity:

  Time Complexity: O(n)

*/
