/*  Problem: Given an array of strings, group anagrams together.

  Example:
    Input: ["eat", "tea", "tan", "ate", "nat", "bat"]

    Output: [["ate", "eat","tea"], ["nat","tan"], ["bat"]]

*/

function groupAnagrams(strs) {
  var obj = {};

  strs.forEach(str => {
    var val = str.split("").sort().join("");
    if (obj[val]) {
      obj[val].push(str);
    }
    else {
      obj[val] = [str];
    }
  });

  var result = [];

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result.push(obj[i]);
    }
  }

  return result;
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]); // [["ate", "eat","tea"], ["nat","tan"], ["bat"]]

// Time Complexity: O(NK) + Sort(), N is no of `str` in `strs` and K is length of each string
