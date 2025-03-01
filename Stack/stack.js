// Implementing Stack using an Array
class Stack {
    constructor() {
        this.items = []; 
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    printStack() {
        console.log(this.items.join(" "));
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek());
stack.printStack();

console.log("Popped element:", stack.pop()); 
stack.printStack(); 

console.log("Is stack empty?", stack.isEmpty()); 
console.log("Stack size:", stack.size()); 

stack.clear();
console.log("Stack after clearing:", stack.items);


// Implementing Stack using an Object
class StackUsingObject {
    constructor() {
        this.stack = {};  
        this.top = 0;     
    }

    push(element) {
        this.stack[this.top] = element;
        this.top++;
    }

    pop() {
        if (this.isEmpty()) return "Stack is empty!";
        this.top--;
        const poppedValue = this.stack[this.top];
        delete this.stack[this.top]; 
        return poppedValue;
    }

    peek() {
        return this.isEmpty() ? "Stack is empty!" : this.stack[this.top - 1];
    }

    isEmpty() {
        return this.top === 0;
    }

    size() {
        return this.top;
    }

    printStack() {
        console.log(this.stack);
    }
}

const myStack = new StackUsingObject();
myStack.push(10);
myStack.push(20);
console.log(myStack.pop()); 
myStack.printStack();


// Implementing Stack using a Queue
class StackUsingQueue {
    constructor() {
        this.queue1 = []; 
        this.queue2 = []; 
    }

    push(value) {
        this.queue2.push(value);

        while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift());
        }

        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }

    pop() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
        return this.queue1.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
        return this.queue1[0];
    }

    isEmpty() {
        return this.queue1.length === 0;
    }

    print() {
        console.log(this.queue1.join(' '));
    }
}

const stack2 = new StackUsingQueue();
stack2.push(10);
stack2.push(20);
stack2.push(30);
console.log("Top element:", stack2.peek()); 
console.log("Popped element:", stack2.pop());
stack2.print(); 
console.log("Is stack empty?", stack2.isEmpty()); 


// Implementing Stack using a Linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackUsingLL {
    constructor() {
        this.top = null;  
        this.size = 0;    
    }

    push(value) {
        const newNode = new Node(value);
        if (this.top) {
            newNode.next = this.top;  
        }
        this.top = newNode;  
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return null;  
        }
        const poppedNode = this.top;
        this.top = this.top.next;  
        this.size--;
        return poppedNode.value;  
    }

    peek() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.top.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    display() {
        let current = this.top;
        let result = "";
        while (current) {
            result += current.value + " ";
            current = current.next;
        }
        console.log(result);
    }
}

const stack3 = new StackUsingLL();
stack3.push(10);
stack3.push(20);
stack3.push(30);

console.log(stack3.peek());  
console.log(stack3.pop());   
console.log(stack3.peek());  
console.log(stack3.getSize());
console.log(stack3.isEmpty());