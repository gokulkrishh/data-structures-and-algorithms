/* Problem: Given a linked list which is unsorted, remove the duplicates

	Example:
		Input: 10->5->3-10->3-4-null
		Output: 10->5->3->4-null

	Follow up:
		- If suppose addition buffer is not allowed.

*/

// Solution 1 - Hashmap & Two pointers (current and previous node)

function removeDuplicateList(head) {
	if (!head) {
		return null;
	}

	var hashMap = {};
	var current = head;
	var previous = null;

	while (current !== null) {
		if (hashMap[current.data]) {
			previous.next = current.next;
		} else {
			hashMap[current.data] = 1;
			previous = current;
		}

		current = current.next;
	}

	return head;
}

var list = {
	data: 10,
	next: {
		data: 5,
		next: {
			data: 3,
			next: {
				data: 10,
				next: {
					data: 3,
					next: {
						data: 4,
						next: null
					}
				}
			}
		}
	}
};

removeDuplicateList(head);

// Time complexity: O(N)
// Space complexity: O(N)

// Solution 2 - No buffer allowed, so check the each node against every next node to null

// Time complexity: O(N^2)
// Space complexity: O(1)
