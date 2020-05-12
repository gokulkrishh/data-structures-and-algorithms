/* Problem: Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

  Example:

    Input: ["Hello", "Alaska", "Dad", "Peace"]
    Output: ["Alaska", "Dad"]

  Note:
  - You may use one character in the keyboard more than once.
  - You may assume the input string will only contain letters of alphabet.

*/

// Solution 1: Dumb

var findWords = function(words) {
  var hash = {
    1: {
      q: "q",
      w: "w",
      e: "e",
      r: "r",
      t: "t",
      y: "y",
      u: "u",
      i: "i",
      o: "o",
      p: "p"
    },
    2: {
      a: "a",
      s: "s",
      d: "d",
      f: "f",
      g: "g",
      h: "h",
      j: "j",
      k: "k",
      l: "l"
    },
    3: { z: "z", x: "x", c: "c", v: "v", b: "b", n: "n", m: "m" }
  };

  var result = [];

  // q to p
  for (var i = 0; i < words.length; i++) {
    var letter = words[i];
    var has = 0;
    for (var j = 0; j < letter.length; j++) {
      var char = letter[j].toLowerCase();
      if (hash[1][char] && !hash[2][char] && !hash[3][char]) {
        has++;
      } else {
        has--;
      }
    }

    if (has === letter.length) {
      result.push(letter);
    }
  }

  // a to l
  for (var i = 0; i < words.length; i++) {
    var letter = words[i];
    var has = 0;
    for (var j = 0; j < letter.length; j++) {
      var char = letter[j].toLowerCase();

      if (hash[2][char] && !hash[1][char] && !hash[3][char]) {
        has++;
      } else {
        has--;
      }
    }

    if (has === letter.length) {
      result.push(letter);
    }
  }

  // z to m
  for (var i = 0; i < words.length; i++) {
    var letter = words[i];
    var has = 0;
    for (var j = 0; j < letter.length; j++) {
      var char = letter[j].toLowerCase();
      if (hash[3][char] && !hash[2][char] && !hash[1][char]) {
        has++;
      } else {
        has--;
      }
    }

    if (has === letter.length) {
      result.push(letter);
    }
  }

  return result;
};

// Time Complexity: O(M * N)
// Space Complexity: O(1)

// SOlution 2 - Regex

function findWords(words) {
  var row1 = /^[qwertyuiop]+$/i;
  var row2 = /^[asdfghjkl]+$/i;
  var row3 = /^[zxcvbnm]+$/i;

  var keyboardRows = [row1, row2, row3];

  return words.filter(word =>
    keyboardRows.some(keyboardRow => keyboardRow.test(word))
  );
}

// Time Complexity: O(M * N)
// Space Complexity: O(1)
