r// 1. Using an Array
class Queue {
    constructor(){
        this.items = []
    }
    
    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            return 'Queue is empty'
        }
        return this.items.shift()
    }

    // front(){
    //     if(this.isEmpty()){
    //         return 'Queue is empty'
    //     }
    //     return this.items[0] 
    // }

    isEmpty(){
        return this.items.length === 0
    }

    // size() {
    //     return this.items.length;
    // }

    print(){
        console.log(this.items.join(" "));
    }
}
let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()


// Using a  Class with a Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        const dequeuedValue = this.front.value;
        this.front = this.front.next;
        this.length--;
        if (this.isEmpty()) {
            this.rear = null; // Reset rear if queue is empty
        }
        return dequeuedValue;
    }

    peek() {
        return this.isEmpty() ? "Queue is empty" : this.front.value;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Front element:", queue.peek()); // Output: Front element: 10
console.log("Dequeued:", queue.dequeue());  // Output: Dequeued: 10
console.log("Front element:", queue.peek()); // Output: Front element: 20


// using two stacks                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
class QueueUsingStacks {
    constructor() {
        this.stack1 = []; // Input stack
        this.stack2 = []; // Output stack
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        if (this.stack2.length === 0) {
            // Transfer all elements from stack1 to stack2
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        if (this.stack2.length === 0) {
            // Transfer all elements from stack1 to stack2
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

let queue = new QueueUsingStacks();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Dequeue:", queue.dequeue()); // Output: Dequeue: 10
console.log("Peek:", queue.peek());       // Output: Peek: 20
queue.enqueue(40);
console.log("Dequeue:", queue.dequeue()); // Output: Dequeue: 20


// Reverse a queue
class Queue {
    constructor() {t
        this.items = []; // Array to store elements
    }

    // Add an element to the rear of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the front element of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the queue
    size() {
        return this.items.length;
    }

    // Print the queue elements
    printQueue() {
        console.log(this.items.join(" "));
    }
}

function reverseQueue(queue) {
    const stack = [];

    // Step 1: Dequeue all elements and push them onto the stack
    while (!queue.isEmpty()) {
        stack.push(queue.dequeue());
    }

    // Step 2: Pop all elements from the stack and enqueue them back into the queue
    while (stack.length > 0) {
        queue.enqueue(stack.pop());
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log("Original Queue:");
queue.printQueue(); // Output: 10 20 30 40

reverseQueue(queue);

console.log("Reversed Queue:");
queue.printQueue(); // Output: 40 30 20 10