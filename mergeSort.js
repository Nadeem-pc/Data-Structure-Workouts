// Ascending order
function mergeSort(arr){
    if(arr.length <= 1) return arr

    // Split the array into two halves
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    // Merge the sorted halves
    return merge(left, right);
}
function merge(left,right){j
    let result = []
    let i = 0, j = 0
    // Merge elements from both arrays in sorted order
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }
    // Add remaining elements from both arrays
    return result.concat(left.slice(i)).concat(right.slice(j))
}
// const array = [38, 27, 43, 3, 82, 10]
// console.log(mergeSort(array))


// Sort Strings Alphabetically
function mergeSortStrings(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSortStrings(arr.slice(0, mid));
    const right = mergeSortStrings(arr.slice(mid));

    return mergeStrings(left, right);
}

function mergeStrings(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i].toLowerCase() < right[j].toLowerCase()) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
}

const strings = ["banana", "Apple", "cherry", "date", "elderberry"];
// console.log(mergeSortStrings(strings));


// Descending order
function mergeSort(arr){
    if(arr.length <= 1) return arr

    // Split the array into two halves
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    // Merge the sorted halves
    return merge(left, right);
}
function merge(left,right){
    let result = []
    let i = 0, j = 0
    // Merge elements from both arrays in sorted order
    while(i < left.length && j < right.length){
        if(left[i] > right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }
    // Add remaining elements from both arrays
    return result.concat(left.slice(i)).concat(right.slice(j))
}
const array = [38, 27, 43, 3, 82, 10]
console.log(mergeSort(array))