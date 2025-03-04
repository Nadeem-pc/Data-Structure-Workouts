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