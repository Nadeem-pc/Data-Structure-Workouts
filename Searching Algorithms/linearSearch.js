const arr = [1,2,3,4,5]

// Check if an Element Exists in an Array
function containsElement(arr,target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return `Element found at index ${i}`
        }
    }   
    return 'Element not found'
}
console.log(containsElement(arr,0))


// Find the First Occurrence of an Element
function firstOccurrence(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return `The first occurence of ${target} is at index ${i}`;
        }
    }
    return -1; 
}
const array = [1, 3, 4, 2, 3, 7];
console.log(firstOccurrence(array, 3));  