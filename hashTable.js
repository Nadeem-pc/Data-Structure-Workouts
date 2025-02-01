// // Count the Frequency of Elements
// function countFrequency(arr) {
//     const hashTable = {};

//     for (let item of arr) {
//         hashTable[item] = (hashTable[item] || 0) + 1;
//     }

//     return hashTable;
// }

// const array = [1, 2, 3, 2, 1, 4, 3, 3, 5];
// // console.log("Frequency count:", countFrequency(array));



  // // 3: Check for Anagrams
// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     const charCount = {};

//     // Count characters in str1
//     for (let char of str1) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     // Compare counts with str2
//     for (let char of str2) {
//         if (!charCount[char]) {
//             return false;
//         }
//         charCount[char]--;
//     }

//     return true;
// }

// console.log(isAnagram("listen", "silent"));
// console.log(isAnagram("hello", "world"));  


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


// Collision handeled hash table using Linear probing
class HashTable {
  constructor(size = 10) {
      this.size = size;
      this.table = new Array(size).fill(null);
  }

  _hash(key) {
      return [...key].reduce((acc, char) => acc + char.charCodeAt(0), 0) % this.size;
  }

  _probe(index, key) {
      let start = index;
      while (this.table[index] !== null && this.table[index][0] !== key) {
          index = (index + 1) % this.size;
          if (index === start) return -1; // Table is full
      }
      return index;
  }

  set(key, value) {
      let index = this._probe(this._hash(key), key);
      if (index !== -1) this.table[index] = [key, value];
  }

  get(key) {
      let index = this._probe(this._hash(key), key);
      return index !== -1 && this.table[index] ? this.table[index][1] : undefined;
  }

  delete(key) {
      let index = this._probe(this._hash(key), key);
      if (index !== -1) this.table[index] = null;
  }

  display() {
      this.table.forEach(pair => pair && console.log(`${pair[0]} : ${pair[1]}`));
  }
}

const hashTable = new HashTable();
hashTable.set("name", "Alice");
hashTable.set("age", 25);
hashTable.display();
console.log("Get name:", hashTable.get("name"));
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

// Example usage
console.log(firstNonRepeatingChar("Swiss")); // Output: "w"


// Rehashing
class HashTable {
  constructor(size = 3){
      this.table = new Array(size)
      this.count = 0
  }
  _hash(key){
      let hash = 0
      for(let char of key){
          hash += char.charCodeAt(0)
      }
      return hash % this.table.length
  }
  set(key,value){
      if(this.count / this.table.length >= 0.7){
      console.log('Original size: ',this.table.length)
          this.rehash()
          console.log("Size after rehashing:", this.table.length);
      }
      let index = this._hash(key)
      if(!this.table[index]){
          this.table[index] = []
      }
      for(let pair of this.table[index]){
          if(pair[0] === key){
              pair[1] = value
              return 
          }
      }
      this.table[index].push([key,value])
      this.count ++
  }
  rehash(){
      console.log('Rehashing...')
      const oldTable = this.table
      // this.table.length *= 2
      this.count = 0
      this.table = new Array(this.table.length * 2)
      
      for(let bucket of oldTable){
          if(bucket){
              for (let [key, value] of bucket){
                  this.set(key, value);  // Reinsert key-value pairs
              }
          }
      }
  }
  display(){
      this.table.forEach(bucket => {c
          if(bucket){
              bucket.forEach(([key,value])=> console.log(`${key} : ${value}`))
          }
      })
  }
}
const hashTable = new HashTable();
hashTable.set('name','Nadeem')
hashTable.set('age',18)
hashTable.set('eman','Raja')
hashTable.set('gea',17)
hashTable.display()


// double hashing
class HashTable {
  constructor(size = 10) {
      this.table = new Array(size);
      this.size = size;
  }

  // Primary Hash Function
  _hash(key) {
      let hash = 0;
      for (let char of key) {
          hash += char.charCodeAt(0);
      }
      return hash % this.size;
  }

  // Secondary Hash Function
  _hash2(key) {
      let hash = 1;
      for (let char of key) {
          hash += char.charCodeAt(0);
      }
      return (hash % (this.size - 1)) + 1; // Ensure non-zero step
  }

  // Insert Using Double Hashing
  set(key, value) {
      let index = this._hash(key);
      let step = this._hash2(key);
      let i = 0;

      while (this.table[index] && this.table[index][0] !== key) {
          i++;
          index = (index + i * step) % this.size; // Double Hashing formula
      }

      this.table[index] = [key, value];
  }

  // Get value
  get(key) {
      let index = this._hash(key);
      let step = this._hash2(key);
      let i = 0;

      while (this.table[index]) {
          if (this.table[index][0] === key) return this.table[index][1];
          i++;
          index = (index + i * step) % this.size;
      }
      return undefined;
  }

  // Display Hash Table
  display() {
      this.table.forEach((bucket, index) => {
          if (bucket) {
              console.log(`${index}: ${bucket[0]} → ${bucket[1]}`);
          }
      });
  }
}

// Usage
const hashTable = new HashTable();
hashTable.set("name", "Alice");
hashTable.set("age", 25);
hashTable.set("email", "alice@example.com");
hashTable.display();

console.log("Get age:", hashTable.get("age"));
console.log("Get email:", hashTable.get("email"));