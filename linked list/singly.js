class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add node to the end
    append(data) {
        const newNode = new Node(data);
        this.size++;
        
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        
        this.tail.next = newNode;
        this.tail = newNode;
    }

    // Alternative append using while loop
    push(data) {
        const newNode = new Node(data);
        this.size++;
        
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        this.tail = newNode;
    }

    // Add node to the beginning 
    addAtBeginning(data) {
        const newNode = new Node(data);
        this.size++;
        
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        
        newNode.next = this.head;
        this.head = newNode;
    }

    // Insert at specific index 
    insertAt(index, data) {

        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return;
        }
        
        if (index === 0) {
            this.addAtBeginning(data);
            return;
        }
        
        if (index === this.size) {
            this.append(data);
            return;
        }
        
        const newNode = new Node(data);
        let current = this.head;
        
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }

    // Delete from beginning 
    deleteAtBeginning() {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }
        
        this.head = this.head.next;
        this.size--;
        
        if (this.head === null) {
            this.tail = null;
        }
    }

    // Delete from end
    deleteFromEnd() {
        if (this.head === null) {
            console.log("The list is empty. Nothing to delete.");
            return;
        }
        
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            this.size--;
            return;
        }
        
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        
        current.next = null;
        this.tail = current;
        this.size--;
    }

    // Delete node with specific value
    deleteNode(value) {
        if (this.head === null) {
            console.log("The list is empty. Nothing to delete.");
            return;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            
            if (this.head === null) {
                this.tail = null;
            }
            
            console.log(`Node with value ${value} deleted.`);
            return;
        }

        // Traverse to find the node to delete
        let current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }

        if (current.next === null) {
            console.log(`Node with value ${value} not found.`);
            return;
        }

        // Update the tail if deleting the last node
        if (current.next === this.tail) {
            this.tail = current;
        }

        // Update the link to skip the node
        current.next = current.next.next;
        this.size--;
        console.log(`Node with value ${value} deleted.`);
    }

    // Delete from specific index 
    deleteFromIndex(index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index");
            return;
        } else if (this.head === null) {
            console.log("List is empty");
            return;
        } else if (index === 0) {
            this.deleteAtBeginning();
            return;
        }
        
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        
        // Update tail if deleting the last node
        if (current.next === this.tail) {
            this.tail = current;
        }
        
        current.next = current.next.next;
        this.size--;
    }

    // Delete middle node 
    deleteMid() {
        if (this.size === 0) {
            console.log("List is empty, Deletion is not possible");
            return;
        }
        
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size--;
            return;
        }
        
        let mid = Math.floor(this.size / 2);
        let current = this.head;
        let prev = null;
        
        for (let i = 0; i < mid; i++) {
            prev = current;
            current = current.next;
        }
        
        prev.next = current.next;
        
        if (current === this.tail) {
            this.tail = prev;
        }
        
        this.size--;
    }

    // Convert array to linked list 
    arrayToLinkedList(arr) {
        arr.forEach(item => this.append(item));
    }

    // Convert linked list to array
    toArray() {
        const result = [];
        let current = this.head;
        
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        
        return result;
    }

    // Print linked list
    print() {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }
        
        let current = this.head;
        let listValues = "";
        
        while (current) {
            listValues += `${current.value} -> `;
            current = current.next;
        }
        
        console.log(listValues + "null");
    }

    // Print in reverse using stack
    printInReverse() {
        const stack = [];
        let current = this.head;
        
        while (current) {
            stack.push(current.value);
            current = current.next;
        }
        
        console.log('In reverse order');
        let reverseValues = "";
        
        while (stack.length > 0) {
            reverseValues += `${stack.pop()} -> `;
        }
        
        console.log(reverseValues + "null");
    }

    // Print in reverse using recursion 
    printReverseRecursive(node) {
        if (node === null) return;
        
        this.printReverseRecursive(node.next);
        console.log(node.value);
    }

    // Print in reverse (recursive wrapper)
    printReverseWrapper() {
        console.log("Linked List in Reverse:");
        this.printReverseRecursive(this.head);
    }

    // Remove duplicates (assuming sorted list) 
    removeDuplicates() {
        if (this.head === null) return;

        let current = this.head;

        while (current !== null && current.next !== null) {
            if (current.value === current.next.value) {
                // Skip the duplicate node
                current.next = current.next.next;
                
                if (current.next === null) {
                    this.tail = current;
                }
                
                this.size--;
            } else {
                current = current.next;
            }
        }
    }

    // Check for cycle 
    checkCycle() {
        let slow = this.head;
        let fast = this.head;
        
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            
            if (slow === fast) {
                return true;
            }
        }
        
        return false;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    // Get value at specific index 
    getAt(index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index");
            return null;
        }
        
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        
        return current.value;
    }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log("Original list:");
list.print();

list.addAtBeginning(0);
console.log("\nAfter adding 0 at beginning:");
list.print();

list.insertAt(3, 2.5);
console.log("\nAfter inserting 2.5 at index 3:");
list.print();

list.deleteAtBeginning();
console.log("\nAfter deleting from beginning:");
list.print();

list.deleteFromEnd();
console.log("\nAfter deleting from end:");
list.print();

// Delete node with value
list.deleteNode(2.5);
console.log("\nAfter deleting node with value 2.5:");
list.print();

// Convert to array
const array = list.toArray();
console.log("\nConverted to array:", array);

// Print in reverse
console.log("\nPrinting in reverse using stack:");
list.printInReverse();

// Print in reverse using recursion
console.log("\nPrinting in reverse using recursion:");
list.printReverseWrapper()

// Create list from array
const newList = new LinkedList();
newList.arrayToLinkedList([5, 6, 7, 8, 9]);
console.log("\nNew list created from array:");
newList.print();

// Check for cycle in both lists
console.log("\nOriginal list has cycle:", list.checkCycle());
console.log("New list has cycle:", newList.checkCycle());

// Create a cycle in the new list for demonstration
console.log("\nCreating a cycle in the new list");
newList.tail.next = newList.head.next;
console.log("New list has cycle after modification:", newList.checkCycle());