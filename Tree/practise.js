class BinaryTree {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
const root = new BinaryTree('A')
const nodeA = new BinaryTree('B')
const nodeB = new BinaryTree('C')
const sub1 = new BinaryTree('a')
const sub2 = new BinaryTree('b')

root.left = nodeA
root.right = nodeB
nodeA.left = sub1
nodeA.right = sub2

