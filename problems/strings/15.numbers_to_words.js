/* Problem: Convert a non-negative integer to its english words representation.

  Example 1:
    Input: 123
    Output: "One Hundred Twenty Three"

  Example 2:
    Input: 12345
    Output: "Twelve Thousand Three Hundred Forty Five"

  Example 3:
    Input: 1234567
    Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

  Example 4:
    Input: 1234567891
    Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

  Note: Given input is guaranteed to be less than 2^31 - 1 (2 to the power of 31 minus 1).
*/

function numberToWords(num) {
  if (num === 0) return 'Zero';

  var lessThanTen = { 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine' };
  var lessThanTwenty = {
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty'
  };
  var lessThanHundred = { 1: 'Ten', 2: 'Twenty', 3: 'Thirty', 4: 'Forty', 5: 'Fifty', 6: 'Sixty', 70: 'Seventy', 8: 'Eighty', 9: 'Ninety' };

  function getWords(num) {
    var str = '';
    if (num < 10) {
      if (num === 0) return '';
      str = lessThanTen[num];
    } else if (num < 20) {
      str = lessThanTwenty[num];
    } else if (num < 100) {
      str = `${lessThanHundred[Math.floor(num / 10)]} ${getWords(num % 10)}`;
    } else if (num < 1000) {
      str = `${getWords(Math.floor(num / 100))} Hundred ${getWords(num % 100)}`;
    } else if (num < 10000) {
      str = `${getWords(Math.floor(num / 10000))} Thousand ${getWords(num % 10000)}`;
    } else if (num < 1000000) {
      str = `${getWords(Math.floor(num / 1000000))} Thousand ${getWords(num % 1000000)}`;
    } else {
      str = `${getWords(Math.floor(num / 10000000))} Thousand ${getWords(num % 10000000)}`;
    }

    return str;
  }

  return getWords(num);
}
