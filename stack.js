// Stack using array
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

    // Clear all elements from the stack
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
console.log("Top element:", stack.peek()); // Output: 30
stack.printStack(); // Output: 10 20 30
console.log("Popped element:", stack.pop()); // Output: 30
stack.printStack(); // Output: 10 20
console.log("Is stack empty?", stack.isEmpty()); // Output: false
console.log("Stack size:", stack.size()); // Output: 2
stack.clear();
console.log("Stack after clearing:", stack.items); // Output: []


// Stack using Object
class Stack {
    constructor() {
        this.stack = {};  // Object to store stack elements
        this.top = 0;     // Keeps track of the top index
    }

    push(element) {
        this.stack[this.top] = element;
        this.top++;
    }

    pop() {
        if (this.isEmpty()) return "Stack is empty!";
        this.top--;
        const poppedValue = this.stack[this.top];
        delete this.stack[this.top]; // Remove from object
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

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.pop()); 
myStack.printStack();


// Reverse a string using stack
function reverseString(str) {
    let stack = [];
    for (let char of str) {
        stack.push(char);
    }
    
    let reversedStr = '';
    while (stack.length > 0) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}
console.log(reverseString("hello")); 


// Leetcode 20
function valid(s){
    const stack = []
    const pairs = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    for(let char of s){
        if(char === '{' || char === '[' || char === '('){
            stack.push(char)
        }else{
            if(stack.length === 0 || pairs[stack.pop()] !== char){
                return false
            }
        }
    }
    return stack.length === 0
}


// Stack using queue
class StackUsingQueue {
    constructor() {
        this.queue1 = []; // Primary queue
        this.queue2 = []; // Temporary queue for operations
    }

    // Push operation
    push(value) {
        // Push the new element into the empty queue2
        this.queue2.push(value);

        // Transfer all elements from queue1 to queue2
        while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift());
        }t

        // Swap the queues
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }

    // Pop operation
    pop() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
        return this.queue1.shift();
    }

    // Peek operation to view the top element
    peek() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
        return this.queue1[0];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.queue1.length === 0;
    }

    // Display the stack elements
    print() {
        console.log(this.queue1.join(' '));
    }
}

const stack = new StackUsingQueue();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top element:", stack.peek()); // Output: 30
console.log("Popped element:", stack.pop()); // Output: 30
stack.print(); // Output: 20 10
console.log("Is stack empty?", stack.isEmpty()); // Output: false


// Reverse a Stack
class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items.join(' '));
    }

    reverse() {
        const temp = [];
        // Move all elements to the temporary array
        while (!this.isEmpty()) {
            temp.push(this.pop());
        }
        for (let value of temp) {
            this.push(value);
        }
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log("Original Stack:");
stack.print(); // Output: 10 20 30 40

stack.reverse();

console.log("Reversed Stack:");
stack.print(); // Output: 40 30 20 10   


// Stack using Linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;  // The top of the stack is the first element in the linked list
        this.size = 0;    // The size of the stack
    }

    // Push a new element onto the stack
    push(value) {
        const newNode = new Node(value);
        if (this.top) {
            newNode.next = this.top;  // Set the new node's next to the current top
        }
        this.top = newNode;  // Set the new node as the new top
        this.size++;
    }

    // Pop the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return null;  // Can't pop from an empty stack
        }
        const poppedNode = this.top;
        this.top = this.top.next;  // Move the top to the next node
        this.size--;
        return poppedNode.value;  // Return the value of the popped node
    }

    // Peek the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return null;  // Can't peek an empty stack
        }
        return this.top.value;
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the stack
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

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());  // Output: 30 (top of the stack)
console.log(stack.pop());   // Output: 30 (pops the top element)
console.log(stack.peek());  // Output: 20 (new top of the stack)
console.log(stack.getSize()); // Output: 2 (size of the stack)
console.log(stack.isEmpty()); // Output: false (stack is not empty)