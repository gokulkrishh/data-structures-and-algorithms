/* Problem: International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

  Note: For convenience, the full table for the 26 letters of the English alphabet is given below:

  [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

  Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

  Return the number of different transformations among all words we have.

  Example:
    Input: words = ["gin", "zen", "gig", "msg"]
    Output: 2
    Explanation:
    The transformation of each word is:
    "gin" -> "--...-."
    "zen" -> "--...-."
    "gig" -> "--...--."
    "msg" -> "--...--."

    There are 2 different transformations, "--...-." and "--...--.".

  Note:
  - The length of words will be at most 100.
  - Each words[i] will have length in range [1, 12].
  - words[i] will only consist of lowercase letters.
*/

var uniqueMorseRepresentations = function (words) {
  var morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  var strs = {};

  for (var i = 0; i < words.length; i++) {
    strs[words[i]] = words[i].split("");
  }

  var result = {};

  for (var i in strs) {
    var str = ""
    for (var j = 0; j < strs[i].length; j++) {
      var char = strs[i][j];
      var code = char.charCodeAt() - 97;
      str += morseCode[code];
    }

    if (!result[str]) {
      result[str] = str;
    }
  }

  var count = 0;

  for (var i in result) {
    count++;
  }

  return count;
};

// Time Complexity: O(N^2)
// Space Complexity: O(N)
