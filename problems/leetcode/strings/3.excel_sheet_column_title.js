/*  Problem: Given a positive integer, return its corresponding column title as appear in an Excel sheet.

  Example:
    Input:
      1 -> A
      2 -> B
      3 -> C
      ...
      26 -> Z
      27 -> AA
      28 -> AB

  Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

  // String.fromCharCode(someNumber); will the abc based on UTF-16 code units
  // Example: String.fromCharCode(65, 66, 67);  // returns "ABC"
*/

function getColumnTitle(num) {
  var str = "";
  while (num) {
    var char = String.fromCharCode((num - 1) % 26 + "A".charCodeAt()); // "A".charCodeAt() === 65
    str = char + str;
    num = Math.floor((num - 1) / 26);
  }
  return str;
}

getColumnTitle(27); // "AA"
getColumnTitle(5444); // "HAJ"
