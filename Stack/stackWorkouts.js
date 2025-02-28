// Reversing a string using stack
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


// Leetcode Question: Valid Parenthesis
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
console.log(valid('[}'));


// Stack that reject duplicates
class UniqueStack {
    constructor() {
        this.stack = [];
        this.set = new Set();
    }

    push(value) {
        if (!this.set.has(value)) {
            this.stack.push(value);
            this.set.add(value);
            return true; 
        }
        return false; 
    }

    pop() {
        if (this.stack.length === 0) return null; 

        const removed = this.stack.pop();
        this.set.delete(removed);
        return removed;
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    display() {
        console.log(this.stack);
    }
}

const stack = new UniqueStack();
stack.push(10);  
stack.push(20);  
stack.push(10);  
stack.push(30);  

stack.display();

console.log(stack.pop()); 
stack.display(); 


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
        while (!this.isEmpty()) {
            temp.push(this.pop());
        }
        for (let value of temp) {
            this.push(value);
        }
    }
}

const stack2 = new Stack();

stack2.push(10);
stack2.push(20);
stack2.push(30);

console.log("Stack before reversing:");
stack2.print(); 

stack2.reverse();

console.log("Stack after reversing:");
stack2.print(); 

console.log("Popped element:", stack2.pop()); 