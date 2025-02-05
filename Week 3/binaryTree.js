class binaryTree{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
const root = new binaryTree('A')
const nodeA = new binaryTree('a')
const nodeB = new binaryTree('b')
const sub1 = new binaryTree('a1')
const sub2 = new binaryTree('a2')

root.left = nodeA
root.right = nodeB
nodeA.left = sub1
nodeA.right = sub2 
console.log(root) 