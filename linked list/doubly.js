class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Insert at the beginning
    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Insert at the end
    append(value) {
        const newNode = new Node(value);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Insert at a specific index
    insertAtSpecific(index, value) {
        if (index < 0 || index > this.size) {
            console.log("Invalid position");
            return;
        }
        const newNode = new Node(value);
        if (index === 0) {
            this.prepend(value);
        } else if (index === this.size) {
            this.append(value);
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            newNode.prev = current;
            if (current.next) {
                current.next.prev = newNode;
            }
            current.next = newNode;
            this.size++;
        }
    }

    print() {
        let current = this.head;
        let listValues = "";
        while (current) {
            listValues += `${current.value} <-> `;
            current = current.next;
        }
        console.log(listValues + "null");
    }
}

const list = new DoublyLinkedList();
list.prepend(1);
list.prepend(2);
list.append(3);
list.insertAtSpecific(1, 5);
list.print(); 