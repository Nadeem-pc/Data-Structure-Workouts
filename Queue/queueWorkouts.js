// Reverse a Queue
class Queue {
    constructor() {
        this.items = []; 
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    printQueue() {
        console.log(this.items.join(" "));
    }
}

function reverseQueue(queue) {
    const stack = [];

    while (!queue.isEmpty()) {
        stack.push(queue.dequeue());
    }

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
queue.printQueue(); 

reverseQueue(queue);

console.log("Reversed Queue:");
queue.printQueue(); 