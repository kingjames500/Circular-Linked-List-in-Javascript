class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head;
        }
    }

    printList() {
        if (!this.head) return;
        let current = this.head;
        do {
            console.log(current.value);
            current = current.next;
        } while (current !== this.head);
    }
}

// Example usage:
const cll = new CircularLinkedList();
cll.append(1);
cll.append(2);
cll.append(3);
cll.prepend(0);
cll.printList();