/* Problem: Given two numbers represented by two lists, write a function that returns the sum list.
	The sum list is list representation of the addition of two input numbers.

	Example:

	Input:
		List1: 5->6->3  // represents number 365
		List2: 8->4->2 //  represents number 248
	Output:
		list: 3->1->6  // represents number 613


	Input:
		List1: 7->5->9->4->6  // represents number 64957
		List2: 8->4 //  represents number 48
	Output:
		list: 5->0->0->5->6  // represents number 65005
*/
// Solution 1 - Iteration of two lists and carry forward the reminder for addition

function sumTwoList(l1, l2) {
	if (!l1 && !l2) {
		return null;
	}

	var result = null;
	var prev = null;
	var carry = 0;
	var sum = 0;

	while (l1 !== null || l2 !== null) {
		sum = carry + l1.data + l2.data;
		carry = sum >= 10 ? 1 : 0;
		sum %= 10;

		var temp = { data: sum, next: null };

		if (!result) {
			result = temp;
		} else {
			prev.next = temp;
		}

		prev = temp;

		l1 = l1.next;
		l2 = l2.next;
	}

	return result;
}

var l1 = {
	data: 7,
	next: {
		data: 1,
		next: {
			data: 6,
			next: null
		}
	}
};

var l2 = {
	data: 5,
	next: {
		data: 9,
		next: {
			data: 2,
			next: null
		}
	}
};

sumTwoList(l1, l2);

// Time Complexity: O(L1 + L2), L1 is list one and L2 is list two
// Space Complexity: O(L3), L3 is new list
