// 1. Find an Element in an Unsorted Array
function linearSearch(arr,target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return `Element found at index ${i}`
        }
    }   
    return 'Element not found'
}
const arr = [1,2,3,4,5]
console.log(linearSearch(arr,0))

// 2. Check if an Element Exists in an Array
function containsElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true; 
        }
    }
    return false; 
}

const arr = [10, 20, 30, 40, 50];
console.log(containsElement(arr, 30)); 

// 3. Find the First Occurrence of an Element
function firstOccurrence(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}

const arr = [1, 3, 4, 2, 3, 7];
console.log(firstOccurrence(arr, 3));  