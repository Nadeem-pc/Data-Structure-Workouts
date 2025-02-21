class binaryTree{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
const root = new binaryTree('A')
const nodeA = new binaryTree('B')
const nodeB = new binaryTree('C')
const sub1 = new binaryTree('a')
const sub2 = new binaryTree('b')

root.left = nodeA
root.right = nodeB
nodeA.left = sub1
nodeA.right = sub2 

// Function to print the tree (Preorder Traversal)
function printTree(node) {
    if (node === null) return;
    console.log(node.value);
    printTree(node.left);
    printTree(node.right);
}
printTree(root);


// Balanced binary tree implementation
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// 🔹 Purpose: Represents a single node in a binary tree.
// 🔹 Properties:

// value: Stores the node's value.
// left: Points to the left child (initially null).
// right: Points to the right child (initially null)

class BalancedBinaryTree {
    constructor() {
        this.root = null;
    }
    // Purpose: Represents the entire binary tree.
    // 🔹 Properties:
    
    // root: Stores the reference to the root node (initially null).
    

    insertLevelOrder(arr) {
        if (arr.length === 0) return null;

        this.root = new TreeNode(arr[0]);
        let queue = [this.root];
        // Creates the root node using the first element in arr.
        // Initializes a queue to assist in level-order insertion.


        let i = 1;
        while (i < arr.length) {
            let current = queue.shift();  
//             Initializes i = 1 (next element in the array).
                // Runs a loop until all elements are inserted.
                // Dequeues the front node (current) from queue

            if (i < arr.length) {   //The first if condition inserts a left child if there are more elements in the array.
                current.left = new TreeNode(arr[i++]);  // Increments i (i++) to move to the next element.
                queue.push(current.left);
            }
            // Checks if there's a next element in arr.
            // Creates a left child for current node.
            // Pushes the new left node into the queue.


            if (i < arr.length) {   // The second if condition inserts a right child if there are still more elements in the array.
                current.right = new TreeNode(arr[i++]);
                queue.push(current.right);
            }
            // Checks if there's another element in arr.
            // Creates a right child for current node.
            // Pushes the new right node into the queue.
        }
    }

    preOrder(node = this.root) {
        if (!node) return;
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
}

let tree = new BalancedBinaryTree();     //Creates an instance of BalancedBinaryTree.
tree.insertLevelOrder([1, 2, 3, 4, 5, 6, 7]);
tree.preOrder();