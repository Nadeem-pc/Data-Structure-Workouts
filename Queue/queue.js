// Queue Implementation using an Array
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

    front(){
        if(this.isEmpty()){
            return 'Queue is empty'
        }
        return this.items[0] 
    }

    isEmpty(){
        return this.items.length === 0
    }

    size() {
        return this.items.length;
    }

    print(){
        console.log(this.items.join(" "));
    }
}
let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
queue.print()



// Queue Implementation using a Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class QueueUsingLL {
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
            this.rear = null; 
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

let queueUsingLL = new QueueUsingLL();
queueUsingLL.enqueue(10);
queueUsingLL.enqueue(20);
queueUsingLL.enqueue(30);
console.log("Front element:", queueUsingLL.peek()); 
console.log("Dequeued:", queueUsingLL.dequeue());  
console.log("Front element:", queueUsingLL.peek()); 



// Queue implementation using Two Stacks                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
class QueueUsingStacks {
    constructor() {
        this.stack1 = []; 
        this.stack2 = []; 
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        if (this.stack2.length === 0) {
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
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
    print() {
        let result = [...this.stack2.reverse(), ...this.stack1].join(" ");
        console.log(result);
    }
}

let queue2 = new QueueUsingStacks();
queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(30);

console.log("Dequeue:", queue2.dequeue()); 
console.log("Peek:", queue2.peek());       
queue2.enqueue(40);
console.log("Dequeue:", queue2.dequeue()); 