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

// Merge 2 sorted Linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to merge two sorted linked lists
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2; // If list1 is null, return list2
    if (!list2) return list1; // If list2 is null, return list1

    // Choose the starting point based on the smaller value
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2); // Recursively merge the rest
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next); // Recursively merge the rest
        return list2;
    }
};

// Function to print the linked list
function printList(node) {
    let result = '';
    while (node !== null) {
        result += node.val + ' ';
        node = node.next;
    }
    console.log(result.trim());
}

// Directly create linked lists
let list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
let list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

// Merge the two lists
let mergedList = mergeTwoLists(list1, list2);

// Print the merged linked list
printList(mergedList); // Output: 1 2 3 4 5 6
