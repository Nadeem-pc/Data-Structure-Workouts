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

//     const charCount = {}

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
    constructor(size = 5) {
        this.table = new Array(size);
        this.size = size;
    }

    _hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    set(key, value) {
        let index = this._hash(key);

        // LINEAR PROBING: Find the next available slot
        while (this.table[index] && this.table[index][0] !== key) {
            index = (index + 1) % this.size;  // Wrap around
        }

        this.table[index] = [key, value];  // Store key-value pair
    }

    get(key) {
        let index = this._hash(key);

        // LINEAR PROBING: Search for the key in case of collisions
        while (this.table[index]) {
            if (this.table[index][0] === key) {
                return this.table[index][1];  // Return the value if found
            }
            index = (index + 1) % this.size;
        }

        return undefined;  // Key not found
    }

    display() {
        this.table.forEach(entry => {
            if (entry) {
                console.log(`${entry[0]} : ${entry[1]}`);
            }
        });
    }
}

// ✅ Testing the Linear Probing Hash Table
const table = new HashTable();
table.set('name', "Nadeem");
table.set('age', 18);
table.set('dream', "BMW M5 CS");
table.display();

console.log("Value for 'age':", table.get('age'));  // Should return 18
console.log("Value for 'unknown':", table.get('unknown'));  // Should return undefined

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
          if(pair[0] === key){t
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
    let index = this._hash(key)
    const step = this._hash2(key)
    let i = 0
    let newIndex = index
    while(this.table[newIndex] && this.table[newIndex][0] !== key){
        i++
        newIndex = (index + i * step) % this.size
    }
    this.table[newIndex] = [key,value]
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
    this.table.forEach((bucket,index) => {
        if(bucket){
           console.log(`${bucket[0]} : ${bucket[1]}`)
        }
    })
  }
}

const hashTable = new HashTable()
hashTable.set('name','Nadeem')
hashTable.set('mean', 'Developer');
hashTable.set('dream','BMW M5 Cs')
hashTable.set('car', 'Porsche 911');
hashTable.set('race', 'Formula 1'); 
hashTable.display()

// Leetcode qstn : two sum using hashmap
var twoSum = function(nums, target) {
  const hashMap = {}; // Create an empty hash map

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i]; // Find the complement needed

    if (difference in hashMap) {
      return [hashMap[difference], i]; // Return indices if found
    }

    hashMap[nums[i]] = i; // Store the index of the current number
  }

  return []; // No solution case (won't happen as per constraints)
};