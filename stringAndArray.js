const array = [4, 5, 1, 2, 0, 4, 1, 2];
function findFirstUnique(arr) {
    const frequency = {};

    // Count the frequency of each element
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    // Find the first element with a frequency of 1
    faor (let num of arr) {
        if (frequency[num] === 1) {
            console.log("First unique element:", num);
            return;
        }
    }

    console.log("No unique elements found.");
}
findFirstUnique(array);


function reverseArray(arr) {
    let left = 0;               // Start pointer
    let right = arr.length - 1; // End pointer

    while (left < right) {
        // Swap elements at left and right indices
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        // Move pointers closer to the middle
        left++;
        right--;
    }
    return arr;
}
const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); 


function reverseWords(str) {
    // Split the string into words
    const words = str.split(' ');
    
    // Reverse each word and join them back
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    
    // Join the reversed words into a single string
    return reversedWords.join(' ');
}
const str = "Hello World";
console.log(reverseWords(str));  


// Palindrome
function checkPalindrome (word){
    let cleanStr = word.toLowerCase()
    let reversedStr = ''
    for(let i = cleanStr.length -1; i >= 0; i--){
        reversedStr += cleanStr[i]
    }
    if(cleanStr === reversedStr) {
        return true
    }
    return false
}
const str = 'Malayalam'
console.log(checkPalindrome(str));


// Count vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels('Nadeem'));