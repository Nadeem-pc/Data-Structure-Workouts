// Bubble sort
function bubbleSort(arr){
  let swapped 
  for(let i = 0; i < arr.length; i++){
    swapped = false
    for(let j = 0; j < arr.length - i - 1; j++){
      if(arr[j] > arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        swapped = true
      }
    }
    if(!swapped) break
  }
  return arr
}
const array = [23,5,12,78,4,2]
console.log('\n',"Array after bubble sort: ",bubbleSort(array),'\n')

// Insertion sort
function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let key = arr[i]
    let j = i - 1
    while(j >= 0 && arr[j] > key){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = key
  }
  return arr
}
const array2 = [23,21,78,46,27,1]
console.log("Array after Insertion sort: ",insertionSort(array2),'\n')

// Selection sort
function selectionSort(arr){
  for(let i = 0; i < arr.length -1; i++){
    let minIndex = i
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    if(minIndex !== i){
      [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }
  }
  return arr
}
const array3 = [4,87,1,27,9,2]
console.log('Array after selection sort: ',selectionSort(array3),'\n');
  
// Merge sort
function mergeSort(arr){
  if(arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left,right)
}

function merge(left,right){
  let result = []
  let i = 0, j = 0
  while(i < left.length && j < right.length){
    if(left[i] < right[j]){
      result.push(left[i])
      i++
    }else{
      result.push(right[j])
      j++
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j))
}
const array4 = [4,2,7,58,4,2]
console.log('Array after merge sort: ',mergeSort(array4),'\n');

// Quick sort
function quickSort(arr){
  if(arr.length <= 1) return arr
  let pivot = arr[arr.length -1]
  let left = []
  let right = []
  for(let i = 0; i < arr.length -1; i++){
    if(arr[i] < pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}
const array5 = [3,24,7,8,1,5]
console.log('Array after quick sort: ',quickSort(array5),'\n')

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
// Create a Set
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

class Queue {
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
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue()
queue.print()


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
          return char; // Return the original case character
      }
  }

  return null; // If no non-repeating character is found
}

console.log(firstNonRepeatingChar("Swiss")); // Output: "w"


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
console.log(findUniqueElements("Swiss")); // Output: ['w', 'i']