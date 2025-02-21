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

class BalancedBinaryTree {
    constructor() {
        this.root = null;
    }

    insertLevelOrder(arr) {
        if (arr.length === 0) return null;

        this.root = new TreeNode(arr[0]);
        let queue = [this.root];

        let i = 1;
        while (i < arr.length) {
            let current = queue.shift();  

            if (i < arr.length) {
                current.left = new TreeNode(arr[i++]);
                queue.push(current.left);
            }

            if (i < arr.length) {
                current.right = new TreeNode(arr[i++]);
                queue.push(current.right);
            }
        }
    }

    preOrder(node = this.root) {
        if (!node) return;
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
}