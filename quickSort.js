// Acending order
function quickSort(arr) {
    // Base case: An array with 0 or 1 elements is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Step 1: Choose a pivot (e.g., the last element)
    const pivot = arr[arr.length - 1];

    // Step 2: Partition the array
    const left = [];  // Elements less than pivot
    const right = []; // Elements greater than pivot

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Step 3: Recursively sort left and right, and combine
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [8, 3, 1, 10, 2];
const sortedArray = quickSort(array);
// console.log("Sorted Array:", sortedArray);


//  Sort Strings Alphabetically
function quickSortStrings(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1].toLowerCase();
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].toLowerCase() < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSortStrings(left), arr[arr.length - 1], ...quickSortStrings(right)];
}

const strings = ["banana", "Apple", "cherry", "date", "elderberry"];
// console.log(quickSortStrings(strings));


// Sort an Array in Descending Order
function quickSortDescending(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSortDescending(left), pivot, ...quickSortDescending(right)];
}

const numbers = [3, 8, 1, 7, 5, 2];
console.log(quickSortDescending(numbers));