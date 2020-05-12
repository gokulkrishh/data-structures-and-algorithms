/* Problem: Given an array of strings, return all groups of strings that are anagrams.

  Note 1: Represent a group by a list of integers representing the index in the original list. Look at the sample case for clarification.
  Note 2: All inputs will be in lower-case.

  Example :

  Input : ["cat", "dog", "god", "tca"]

  Output : [[1, 4], [2, 3]]

  Explanation:

  - cat and tca are anagrams which correspond to index 1 and 4.
  - dog and god are another set of anagrams which correspond to index 2 and 3.
  - The indices are 1 based ( the first element has index 1 instead of index 0).

*/


function findAnagram(arr) {
  var temp = [];
  if (arr.length === 0) return temp;
  var obj = {};

  arr.forEach((str, index) => {
    var sortedStr = str.split("").sort().join("");
    
    if (obj[sortedStr]) {
      obj[sortedStr].push(index + 1);
    }
    else {
      obj[sortedStr] = [index + 1];
    }
  });

  for (var i in obj) {
    temp.push(obj[i]);
  }

  return temp;
}

findAnagram(["cat", "dog", "god", "tca"]); // [[1, 4], [2, 3]]
findAnagram(["b"]); // [1];

// Time Complexity: O(N)
