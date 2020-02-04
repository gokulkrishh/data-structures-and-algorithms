/* Problem:

  Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

    push(x) -- Push element x onto stack.
    pop() -- Removes the element on top of the stack.
    top() -- Get the top element.
    getMin() -- Retrieve the minimum element in the stack.

  Note: retrieving the minimum element in constant time.
*/

// Solution 1

var MinStack = function() {
	this.arr = [];
};

MinStack.prototype.push = function(x) {
	this.arr.push(x);
};

MinStack.prototype.pop = function() {
	this.arr.pop();
};

MinStack.prototype.top = function() {
	return this.arr[this.arr.length - 1];
};

MinStack.prototype.getMin = function() {
	return Math.min.apply(null, this.arr);
};

var minStack = new MinStack();

minStack.push(1); // [1]
minStack.push(2); // [1, 2]
minStack.push(-1); // [1, 2, -1]
minStack.push(0); // [1, 2, -1, 0]
minStack.pop(); // 0
minStack.getMin(); // -1
minStack.pop(); // -1
minStack.getMin(); // 1

// Time Complexity of getMin - O(N)

// Solution 2 - WIP
