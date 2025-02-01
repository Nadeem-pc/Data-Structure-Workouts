// Ascending order
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i]      // Element to be inserted
        let j = i - 1

        // Move elements of arr[0..i-1] that are greater than key
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j]
            j-- 
        }
        arr[j + 1] = key        // Insert the key into its correct position
    }
    return arr
}
let array = [12,37,31,27,5]
// console.log(insertionSort(array))


//  Sort an Array of Strings Alphabetically
function insertionSortStrings(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j].toLowerCase() > key.toLowerCase()) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

const strings = ["banana", "Apple", "cherry", "date", "elderberry"];
// console.log(insertionSortStrings(strings));


//  Sort an Array in Descending Order
function insertionSortDescending(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] < key) { 
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(insertionSortDescending(numbers));