// First unique element in an array
function findFirstUnique(arr) {
    const frequency = {};

    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    for (let num of arr) {
        if (frequency[num] === 1) {
            console.log("First unique element:", num);
            return;
        }
    }

    console.log("No unique elements found.");
}
const array = [4, 5, 1, 2, 0, 4, 1, 2];
findFirstUnique(array);


// Reverse an array
function reverseArray(arr) {
    let left = 0;               
    let right = arr.length - 1; 

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
    return arr;
}
const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); 

function reverseWords(str) {
    const words = str.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    return reversedWords.join(' ');
}
const word = "Hello World";
console.log(reverseWords(word));  