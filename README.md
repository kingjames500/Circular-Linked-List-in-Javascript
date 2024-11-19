# Circular Linked List

A circular linked list is a variation of the linked list data structure where the last node points to the first node, forming a circular loop. This structure allows for efficient traversal from any node to any other node in the list.

## Features

- **Circular Nature**: The last node points back to the first node, creating a loop.
- **Traversal**: Can start from any node and traverse the entire list.
- **No Null References**: Unlike a singly linked list, there are no null references in the list.

## Advantages

- **Efficient Traversal**: Easy to traverse from any node to any other node.
- **Useful for Round-Robin Scheduling**: Ideal for applications that require cyclic iteration.

## Disadvantages

- **Complexity**: More complex to implement than a singly or doubly linked list.
- **Infinite Loop Risk**: Care must be taken to avoid infinite loops during traversal.

## Basic Operations

### Insertion

1. **At the Beginning**: Insert a new node and adjust the last node's next pointer.
2. **At the End**: Insert a new node and update the last node's next pointer to the new node.
3. **At a Specific Position**: Traverse to the desired position and insert the new node.

### Deletion

1. **From the Beginning**: Adjust the head pointer and update the last node's next pointer.
2. **From the End**: Traverse to the second last node and update its next pointer to the head.
3. **From a Specific Position**: Traverse to the node before the desired position and update pointers accordingly.

### Traversal

- Start from any node and follow the next pointers until you reach the starting node again.

## Example

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            self.head.next = self.head
        else:
            temp = self.head
            while temp.next != self.head:
                temp = temp.next
            temp.next = new_node
            new_node.next = self.head

    def display(self):
        nodes = []
        temp = self.head
        if self.head:
            while True:
                nodes.append(temp.data)
                temp = temp.next
                if temp == self.head:
                    break
        print(" -> ".join(map(str, nodes)))

# Example usage
cll = CircularLinkedList()
cll.append(1)
cll.append(2)
cll.append(3)
cll.display()  # Output: 1 -> 2 -> 3
```

## Conclusion

Circular linked lists are a powerful data structure with unique properties that make them suitable for specific applications. Understanding their implementation and operations is crucial for leveraging their benefits effectively.