/* Problems: Implement a trie with insert, search, and startsWith methods.

  Example:
    Trie trie = new Trie();
    trie.insert("apple");
    trie.search("apple");   // returns true
    trie.search("app");     // returns false
    trie.startsWith("app"); // returns true
    trie.insert("app");
    trie.search("app");     // returns true

  Note:
    - You may assume that all inputs are consist of lowercase letters a-z.
    - All inputs are guaranteed to be non-empty strings.

  Application:

    - Search Autocomplete (Google Search Autocomplete)
    - Spell Checker
    - Word Prediction

  Advantages;

    - Time Complexity: O(L), L is length of keys.
    - Apparently faster than BST

  Dis-Advantages:
    - Memory of trie. In the worst case, there is one node per character.

*/

var Trie = function() {
  this.tree = {};
};

Trie.prototype.insert = function(word) {
  var node = this.tree;

  for (var i = 0; i < word.length; i++) {
    node = node[word[i]] = node[word[i]] || {}; // So basically this will insert like {a: {b: {c: { isEnd: true }}}}
  }

  node.isEnd = true;
};

Trie.prototype.search = function(word, isPrefix) {
  var node = this.tree;

  for (var i = 0; i < word.length; i++) {
    if (!node[word[i]]) return false;
    node = node[word[i]];
  }

  return isPrefix || !!node.isEnd;
};

Trie.prototype.startsWith = function(word) {
  return this.search(word, true);
};

var t = new Trie();
t.insert('apple');
t.search('apple'); // returns true
t.search('app'); // returns false
t.startsWith('app'); // returns true
t.insert('app');
t.search('app'); // returns true

// Time Complexity: O(L), L is length of keys
// Space Complexity: O(1)
