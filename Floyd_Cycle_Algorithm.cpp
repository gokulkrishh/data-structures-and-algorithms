// C++ program to detect loop in a linked list 
#include <bits/stdc++.h> 
using namespace std; 

/* Link list node */
class Node { 
public: 
	int data; 
	Node* next; 
}; 

void push(Node** head_ref, int new_data) 
{ 
	/* allocate node */
	Node* new_node = new Node(); 

	/* put in the data */
	new_node->data = new_data; 

	/* link the old list off the new node */
	new_node->next = (*head_ref); 

	/* move the head to point to the new node */
	(*head_ref) = new_node; 
} 

int detectLoop(Node* list) 
{ 
	Node *slow_p = list, *fast_p = list; 

	while (slow_p && fast_p && fast_p->next) { 
		slow_p = slow_p->next; 
		fast_p = fast_p->next->next; 
		if (slow_p == fast_p) { 
			return 1; 
		} 
	} 
	return 0; 
} 

/* Driver code*/
int main() 
{ 
	/* Start with the empty list */
	Node* head = NULL; 

	push(&head, 20); 
	push(&head, 4); 
	push(&head, 15); 
	push(&head, 10); 

	/* Create a loop for testing */
	head->next->next->next->next = head; 
	if (detectLoop(head)) 
		cout << "Loop found"; 
	else
		cout << "No Loop"; 
	return 0; 
} 

// This is code is contributed by rathbhupendra 
