// Finding Frequency of Elements in an Array using hash table
function countFrequency(arr) {
    const hashTable = {};

    for (let item of arr) {
        hashTable[item] = (hashTable[item] || 0) + 1;
    }

    return hashTable;
}
const array = [1, 2, 3, 2, 1, 4, 3, 3, 5];
console.log("Frequency count:", countFrequency(array));


// Check for Anagrams
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const charCount = {}

    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));  


// Find occurrence of each character in a string using hash table
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


// Find the first non-repeating character from the word 'Swiss' using hash table
function firstNonRepeatingChar(str) {
    const hashTable = {};
  
    const lowerStr = str.toLowerCase();
    for (let char of lowerStr) {
        if (char !== " ") hashTable[char] = (hashTable[char] || 0) + 1;
    }
  
    for (let char of str) {
        if (char !== " " && hashTable[char.toLowerCase()] === 1) {
            return char; 
        }
    }
  
    return null; 
}
console.log(firstNonRepeatingChar("Swiss"));


// Leetcode Question: Two sum using hashmap
var twoSum = function(nums, target) {
    const hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i]; 

        if (difference in hashMap) {
            return [hashMap[difference], i]; 
        }

        hashMap[nums[i]] = i; 
    }

    return []; 
};
console.log(twoSum([2, 7, 11, 15], 9))


// Finding duplicates
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


// Finding unique elements
function findUniqueElements(str) {
    const hashTable = {};
    
    for (let char of str.toLowerCase()) {
        if (char !== " ") hashTable[char] = (hashTable[char] || 0) + 1;
    }
    
    return Object.keys(hashTable).filter(char => hashTable[char] === 1);
}
console.log(findUniqueElements("Swiss")); 