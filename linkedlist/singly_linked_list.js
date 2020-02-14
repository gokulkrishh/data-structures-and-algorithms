/*

	## Implementation Of Singly Linked List

	_Using arrays_

	### Methods

	1. Add a node

	1. Remove a node

	1. Search a node

*/

// 1. Add a node

function singlyLinkedList() {
	this.length = 0; //Default value
	this.head = null;
}

//To store in a new node
function storeNode(data) {
	this.data = data;
	this.next = null;
}

//To add a node
singlyLinkedList.prototype.add = function(value) {
	var node = new storeNode(value);
	var currentNode = this.head;

	//If current node is null, then its a new list
	if (!currentNode) {
		this.head = node; //Set new node as current node

		this.length++; //Increment length of list

		return node;
	}

	//If next presents, then set current node to next node
	while (currentNode.next) {
		currentNode = currentNode.next;
	}

	currentNode.next = node; //Set next node as newly created node

	this.length++;

	return node;
};

var list = new singlyLinkedList();
list.add(1); //Head
list.add(2); //1st node has ref of this node, this node ref = null

// 2. Remove a node

singlyLinkedList.prototype.remove = function(position) {
	var currentNode = this.head;
	var deletedNode = null;
	var nextToDelete = null;
	var beforeToDelete = null;
	var count = 0;

	//If position not present
	if (position < 0 || position > list.length) {
		throw new Error("Invalid position");
	}

	//If position is head's position
	if (position === 1) {
		this.head = currentNode.next; //Set next node to head
		deletedNode = currentNode; //To return deleted node
		this.length--; //Decrement the length

		return deletedNode;
	}

	//If any other position
	while (count < position) {
		beforeToDelete = currentNode;
		nextToDelete = currentNode.next;
		count++;
	}

	beforeToDelete.next = nextToDelete.next; //Before removing node
	deletedNode = nextToDelete;
	nextToDelete = null;
	this.length--; //Decrement length after deleting
	return deletedNode;
};

// 3. Search a node
singlyLinkedList.prototype.search = function(position) {
	var currentNode = this.head;
	var count = 1;

	//If list is empty or position invalid or position not present
	if (this.length < 0 || position > this.length || position < 0) {
		throw new Error("Invalid position");
	}

	//If position present, return its node
	while (count < position) {
		currentNode = currentNode.next; //Set currentNode to next node
		count++;
	}

	return currentNode;
};

<a
	href="https://gist.github.com/gokulkrishh/1916ba9395e627943e04"
	target="_blank"
>
	Full Example
</a>;
