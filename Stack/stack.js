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