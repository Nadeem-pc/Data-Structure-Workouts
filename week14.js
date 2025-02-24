// Merge 2 sorted Linked list
class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

// Function to merge two sorted linked lists
var mergeTwoLists = function(list1, list2) {
  if (!list1) return list2; // If list1 is null, return list2
  if (!list2) return list1; // If list2 is null, return list1

  // Choose the starting point based on the smaller value
  if (list1.val < list2.val) {
      list1.next = mergeTwoLists(list1.next, list2); // Recursively merge the rest
      return list1;
  } else {
      list2.next = mergeTwoLists(list1, list2.next); // Recursively merge the rest
      return list2;
  }
};

// Function to print the linked list
function printList(node) {
  let result = '';
  while (node !== null) {
      result += node.val + ' ';
      node = node.next;
  }
  console.log(result.trim());
}

// Directly create linked lists
let list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
let list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

// Merge the two lists
let mergedList = mergeTwoLists(list1, list2);

// Print the merged linked list
printList(mergedList); // Output: 1 2 3 4 5 6

// Queue implementation
class Queue {
  constructor(){
    this.items = []
  }

  enqueue(value){
    this.items.push(value)
  }

  dequeue(){
    if(this.isEmpty()){
      return 'Queue is empty'
    }
    return this.items.shift()
  }

  isEmpty(){
    return this.items.length === 0
  }

  size(){
    return this.items.length
  }

  print(){
    console.log(this.items.join(' '))
  }
}
let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.dequeue()
queue.print()
console.log(queue.size());

// Hashset
const mySet = new Set();
// Add values
mySet.add(1);
mySet.add(2);
mySet.add(1); // Duplicate, will not be added

// Check if a value exists
console.log(mySet.has(1)); // Output: true
console.log(mySet.has(3)); // Output: false

// Delete a value
mySet.delete(2);

// Iterate through the Set
mySet.forEach(value => console.log(value)); // Output: 1

// Convert Set to Array
const myArray = Array.from(mySet);
console.log(myArray); // Output: [1]


// Queue using LL
class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class QueueUsingLL {
  constructor(){
    this.front= null
    this.rear = null
    this.length = 0
  }
  enqueue(value){
    const newNode = new Node(value)
    if(this.isEmpty()){
      this.front = this.rear = newNode
    }else{
      this.rear.next = newNode
      this.rear = newNode
    }
    this.length ++
  }
  
  dequeue(){
    if(this.isEmpty()){
      return 'Queue is empty'
    }
    const dequeuedValue = this.front.value
    this.front = this.front.next
    this.length --
    if(this.front === null){
      this.rear = null
    }
    return dequeuedValue
  }
    isEmpty() {
    return this.length === 0;
  }
  
  print(){
    let queue = []
    let current = this.front
    while(current){
      queue.push(current.value)
      current = current.next 
    }
    console.log(queue.length ? queue.join(' ') : 'Queue is empty')
  }
}
let queue2 = new QueueUsingLL();
queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(30);
queue2.dequeue()
queue2.print()


// Collision handeled hash table using chaining
class HashTable {
  constructor(size = 10) {
      this.table = new Array(size);
  }
  _hash(key) {
      let hash = 0;
      for (let char of key) {
          hash += char.charCodeAt(0);
      }
      
      return hash % this.table.length;
  }
  
  set(key, value) {
      const index = this._hash(key);
      if (!this.table[index]) {
          this.table[index] = [];
      }
      for (let pair of this.table[index]) {
          if (pair[0] === key) {
              pair[1] = value;
              return;
          }
      }
      this.table[index].push([key, value]);
  }
  
  get(key) {
    const index = this._hash(key);
    const bucket = this.table[index];
    if (bucket) {
      for (let [k, v] of bucket) {
        if (k === key) {
          return v;
        }
      }
    }
    return undefined;
  }
  
  delete(key) {
    const index = this._hash(key);
    const bucket = this.table[index];
    if (bucket) {
      this.table[index] = bucket.filter(([k, _]) => k !== key);
    }
  }

  display(){
    this.table.forEach((bucket,index)=>{
      if(bucket){
        bucket.forEach(([key, value]) => console.log(`${key} : ${value}`));
      }
    })
  } 
}

const hashTable = new HashTable();
hashTable.set("name", "Alice");
hashTable.set("age", 25);
hashTable.display()
console.log("Get name:", hashTable.get("name"));
console.log("Get age:", hashTable.get("age")); 
hashTable.delete("name");
console.log("Get name after delete:", hashTable.get("name")); 

// Find occurrence of each character in a string using hashTable
function countOccurrences(str) {
  const hashTable = {};
  for (let char of str) {
      if (char !== " ") {  
          hashTable[char] = (hashTable[char] || 0) + 1;
      }
  }
  for (let key in hashTable) {
      console.log(`${key} : ${hashTable[key]}`);
  }
}
countOccurrences("hello world");


//Find the first non-repeating character in 'Swiss ' using hash table
function firstNonRepeatingChar(str) {
  const hashTable = {};

  // Count occurrences (case-insensitive)
  const lowerStr = str.toLowerCase();
  for (let char of lowerStr) {
      if (char !== " ") hashTable[char] = (hashTable[char] || 0) + 1;
  }

  // Find the first non-repeating character in the original string
  for (let char of str) {
      if (char !== " " && hashTable[char.toLowerCase()] === 1) {
          return char; 
      }
  }

  return null; 
}

console.log(firstNonRepeatingChar("Swiss")); 


// finding duplicates
function findDuplicates(str) {
  const hashTable = {};
  const duplicates = new Set();

  for (let char of str) {
      if (char !== " ") {
          hashTable[char] = (hashTable[char] || 0) + 1;
          if (hashTable[char] > 1) duplicates.add(char);
      }
  }
  
  return [...duplicates];
}
console.log(findDuplicates("nadeem"));

// finding unique elements
function findUniqueElements(str) {
  const hashTable = {};
  
  for (let char of str.toLowerCase()) {
      if (char !== " ") hashTable[char] = (hashTable[char] || 0) + 1;
  }
  
  return Object.keys(hashTable).filter(char => hashTable[char] === 1);
}
console.log(findUniqueElements("Swiss")); 

// 230
var kthSmallest = function (root, k) {
  let ans, count = 0
  function inOrder(root) {
      if (!root) return
      inOrder(root.left)
      count++
      if (count === k) return ans = root.val
      inOrder(root.right)
  }
  inOrder(root)
  return ans
};

// 215
var findKthLargest = function (nums, k) {
  const heap = new MaxPriorityQueue()
  for (let i = 0; i < nums.length; i++)
      heap.enqueue(nums[i])
  while (k-- > 1)
      heap.dequeue()
  return heap.front().element
};
