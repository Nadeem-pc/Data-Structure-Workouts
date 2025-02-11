// Ascending order
function bubbleSort(arr){
    let isSwapped
    for(let i = 0; i < arr.length; i++){
        isSwapped = false
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                isSwapped = true
            }
        }
        if(!isSwapped) break
    }
    return arr
}
const array = [5,4,3,1,2]
console.log(bubbleSort(array))


// Sorting Strings Alphabetically
function bubbleSortStrings(arr, order = "asc") {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (
                (order === "asc" && arr[j].localeCompare(arr[j + 1]) > 0) || 
                (order === "desc" && arr[j].localeCompare(arr[j + 1]) < 0)
            ) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

let strings = ["banana", "apple", "cherry", "date"];
console.log("Original array:", strings);

// Sort in ascending order
console.log("Sorted array (asc):", bubbleSortStrings(strings, "asc"));

// Sort in descending order
console.log("Sorted array (desc):", bubbleSortStrings(strings, "desc"));