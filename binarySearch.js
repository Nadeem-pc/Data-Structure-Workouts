// 1. Find an Element in a Sorted Array
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;  // Return the index if the element is found
        } else if (arr[mid] < target) {
            left = mid + 1;  // Narrow the search to the right half
        } else {
            right = mid - 1;  // Narrow the search to the left half
        }
    }
    return -1; 
}

// const arr = [1, 3, 5, 7, 9, 11];
// console.log(binarySearch(arr, 7));  


// 2. Find the Leftmost Index of a Target in a Sorted Array
function leftmostBinarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;  // Update result when element is found
            right = mid - 1;  // Move left to find the leftmost index
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

// const arr = [1, 2, 3, 3, 3, 4, 5];
// console.log(leftmostBinarySearch(arr, 3));  



// 3. Find the First Element Greater Than a Target
function firstGreaterThan(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] > target) {
            result = arr[mid];  // Update result with the current element
            right = mid - 1;  // Move left to check for earlier elements
        } else {
            left = mid + 1;
        }
    }

    return result;
}

const arr = [1, 3, 5, 7, 9, 11];
console.log(firstGreaterThan(arr, 6));  