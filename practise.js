// Appending using while loop
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    push(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
    }

    print(){
        if(this.head === null){
            console.log("List is empty");
        }else{
            let current = this.head
            let listValues = ""
            while(current){
                listValues += `${current.value} `
                current = current.next
            }
            console.log(listValues);
        }
    }
}
const list = new LinkedList()
list.push(1)
list.push(2)
list.push(3)
list.print()


// Appending using tail
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;  // Add a tail pointer to keep track of the last node
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            // If the list is empty, set both head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Use the tail pointer to add the new node directly to the end
            this.tail.next = newNode;
            this.tail = newNode;  // Update the tail pointer to the new last node
        }
    }

    print() {
        if (this.head === null) {
            console.log("Linked list is empty");
        } else {
            let current = this.head;
            let listValues = "";
            while (current) {
                listValues += `${current.value} `;
                current = current.next;
            }
            console.log(listValues);
        }
    }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print();  

// Deletion from begining
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(){
        this.head = null
    }
    
    addAtBeginning(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
    }
    
    deleteAtBeginning(){
        if(this.head === null){
            console.log("List is empty")
        }
        this.head = this.head.next
    }
    
    print(){
        if(this.head === null){
            console.log("List is empty")
        }
        let current = this.head
        let listValues = ""
        while(current){
            listValues += `${current.value} `
           current= current.next 
        }
        console.log(listValues)
    }
}
const list = new LinkedList()
list.addAtBeginning(0)
list.addAtBeginning(1)
list.addAtBeginning(2)
list.addAtBeginning(3)
list.deleteAtBeginning()
list.print()

// Deletion from end
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(){
        this.head = null
    }
    
    addAtBeginning(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
    }
    
    deleteFromEnd(){
        if (this.head === null) {
        console.log("The list is empty. Nothing to delete.");
        }
        if(this.head.next === null){
            this.head = null
            console.log("deleted")
        }
        let current = this.head
        while(current.next.next){
            current = current.next
        }
        current.next = null

    }

    
    print(){
        if(this.head === null){
            console.log("List is empty")
        }
        let current = this.head
        let listValues = ""
        while(current){
            listValues += `${current.value} `
           current= current.next 
        }
        console.log(listValues)
    }
}
const list = new LinkedList()
list.addAtBeginning(0)
list.addAtBeginning(1)
list.addAtBeginning(2)
list.addAtBeginning(3)
list.deleteFromEnd();
list.print()

// Delete a specific node by value
deleteNode(value) {
    if (this.head === null) {
        console.log("The list is empty. Nothing to delete.");
        return;
    }

    // If the node to delete is the head
    if (this.head.value === value) {
        this.head = this.head.next;
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

    // Update the link to skip the node
    current.next = current.next.next;
    console.log(`Node with value ${value} deleted.`);
}

// Deletion of middle node
deleteMid() {
    if(this.size === 0){
        console.log("List is empty, Deletion is not possible");
    }if (this.size === 1){
        this.head = null
        this.tail = null
        this.size --
    }
    let mid = Math.floor(this.size / 2)
    let current = this.head
    let prev = null
    for(let i = 0; i < mid; i++){
        prev = current
        current = current.next                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    }
    prev.next = current.next
    if(current === this.tail){
        this.tail = prev
    }
    this.size --
}

// Deletion from specific index
deleteFromIndex(index){
    if(index < 0){
        console.log("Invalid index");
    }else if(this.head === null){
        console.log("list is empty");
    }else if(index === 0){
        this.head =this.head.next
    }
    let current = this.head
    for(let i =0;i<index-1;i++){
        current = current.next
    }
    const newNode = 
}

// Function to convert an array into a linked list
const arr = [1,2,3,4,5]

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }
    append(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
    }
    
    arrayToLinkedList(arr) {
        arr.forEach((item)=>this.append(item))
    }               
    
    print(){
           if(this.head === null){
            console.log("List is empty")
        }
        let current = this.head
        let listValues = ""
        while(current){
            listValues += `${current.value}->`
           current= current.next 
        }
        console.log(listValues + "null")
    }
}    


const list = new LinkedList()
list.arrayToLinkedList(arr);
list.print()

printInReverse(){
    const stack = []
    let current = this.head
    while(current){
        stack.push(current.value)
        current = current.next
    }
    console.log('In reverse order')
    let reverseValues = ""
    while(stack.length > 0){
        reverseValues += `${stack.pop()} -> `
    }
    console.log(reverseValues, 'null')
}

// printing in reverse using recursion
  // Recursive helper function
  printReverseRecursive(node) {
    if (node === null) return;
    this.printReverseRecursive(node.next); // Recur to the next node
    console.log(node.value); // Print on the way back
}

printInReverse() {
    console.log("Linked List in Reverse:");
    this.printReverseRecursive(this.head);
}

removeDuplicates() {
    if (this.head === null) return; // Empty list, nothing to remove

    let current = this.head;

    while (current !== null && current.next !== null) {
        if (current.value === current.next.value) {
            // Skip the duplicate node
            current.next = current.next.next;
        } else {
            // Move to the next node
            current = current.next;
        }
    }
}

// Converting LL to array
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }
    append(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
    }
    
    print(){
           if(this.head === null){
            console.log("List is empty")
        }
        let current = this.head
        let listValues = ""
        while(current){
            listValues += `${current.value}->`
           current= current.next 
        }
        console.log(listValues + "null")
    }
      toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.value); // Add each node's value to the array
            current = current.next;
        }
        return result;
    }
}    


const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.print()

const array = list.toArray();
console.log("Converted Array:", array);


// check cycle
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }
    append(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        }
        this.tail.next = newNode
        this.tail = newNode
    }
    print(){
        let current = this.head
        let listValues = ""
        while(current){
            listValues += `${current.value} -> `
            current = current.next
        }
        console.log(listValues + 'null')
    }
    checkCycle(){
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        if(slow === fast){
            return true
        }
        }
        return false
    }
}

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(0)
list.print()

list.head.next.next.next = list.head
console.log(list.checkCycle())