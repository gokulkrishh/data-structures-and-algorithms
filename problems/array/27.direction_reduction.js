/* Problem: Once upon a time, on a way through the old wild mountainous west,a man was given directions to go from one point to another.
	The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
	Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather
	and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

	How I crossed a mountain desert the smart way.

	Example 1:
		Input: ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
		Output: ["WEST"]

	Example 2:

		In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
		The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [].
		In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

	Notes:
		- Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
		- if you want to translate, please ask before translating.

*/

// Solution 1 - Two pointer

function dirReduc(arr) {
	var result = [];
	var tempResult = [];

	if (!arr) return result;

	var hashMap = { NORTH: "SOUTH", SOUTH: "NORTH", EAST: "WEST", WEST: "EAST" };

	var pointer1 = 0;
	var pointer2 = 1;

	while (pointer1 <= arr.length - 1) {
		var p1Val = arr[pointer1];
		var p2Val = arr[pointer2];

		if (hashMap[p1Val] === p2Val) {
			pointer1 += 2;
			pointer2 += 2;
		} else {
			tempResult.push(p1Val);
			pointer1 += 1;
			pointer2 += 1;
		}
	}

	for (var i = 0; i < tempResult.length; i++) {
		if (hashMap[tempResult[i]] === tempResult[i + 1]) {
			i += 1;
		} else {
			result.push(tempResult[i]);
		}
	}

	return result;
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); // ["WEST"]

// Time Complexity: O(N)
// Space Complexity: O(N)

// Solution 2 - Two pointer in one iteration

function dirReduc(arr) {
	if (!arr) return [];

	var hashMap = { NORTH: "SOUTH", SOUTH: "NORTH", EAST: "WEST", WEST: "EAST" };

	for (var i = 0; i < arr.length - 1; ) {
		if (hashMap[arr[i]] === arr[i + 1]) {
			arr.splice(i, 2);
			i = i === 0 ? 0 : i - 1;
		} else {
			i += 1;
		}
	}

	return arr;
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); // ["WEST"]

// Time Complexity: O(N)
// Space Complexity: O(1)
