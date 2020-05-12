/* Problem: LRU Cache

  Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
    - get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
    - put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

  Follow up:
  - Could you do both operations in O(1) time complexity?

  Example:

    LRUCache cache = new LRUCache( 2 ); // capacity

    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);       // returns 1
    cache.put(3, 3);    // evicts key 2
    cache.get(2);       // returns -1 (not found)
    cache.put(4, 4);    // evicts key 1
    cache.get(1);       // returns -1 (not found)
    cache.get(3);       // returns 3
    cache.get(4);       // returns 4


  Reference: https://medium.com/dsinjs/implementing-lru-cache-in-javascript-94ba6755cda9

*/

function LRUCache(limit) {
  this.map = {};
  this.storage = [];
  this.limit = limit;
}

LRUCache.prototype.get = function(key) {
  if (this.map[key]) {
    this.update(key);
    return this.map[key];
  }

  return -1;
};

LRUCache.prototype.put = function(key, value) {
  if (this.map[key]) {
    this.update(key);
    this.map[key] = value;
    return;
  }

  if (this.limit === this.storage.length) {
    delete this.map[this.storage.shift()];
  }

  this.map[key] = value;
  this.storage.push(key);
};

LRUCache.prototype.update = function(key) {
  this.storage.splice(this.storage.indexOf(key), 1);
  this.storage.push(key);
};

var cache = new LRUCache(2); // capacity

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4

// Time Complexity: O(1), even better we could implement this using doubly linked list as read & write is O(1)
