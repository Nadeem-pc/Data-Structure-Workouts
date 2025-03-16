const arr = [1, 8, 5, 7, 3, 9, 11];

// Find an Element from a Sorted Array
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return `Element found at index ${mid}`;  
        } else if (arr[mid] < target) {
            left = mid + 1;  
        } else {
            right = mid - 1;  
        }
    }
    return -1; 
}
console.log(binarySearch(arr, 7));  


// Find the first occurence of a given target
function leftmostBinarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;  
            right = mid - 1;  
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return `The first occurence of ${target} is at index ${result}`;
}
const array = [1,2,3,3,5]
console.log(leftmostBinarySearch(array, 3));  


// Find the First Element Greater Than a Target
function firstGreaterThan(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] > target) {
            result = arr[mid];
            right = mid - 1;  
        } else {
            left = mid + 1;
        }
    }

    return `${result} is the first element that is greater than ${target}`;
}
console.log(firstGreaterThan(arr, 6));  