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