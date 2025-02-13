class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    search(root,value){
        if(!root) return false
        if(root.value === value) return true
        if(root.value < value){
            return this.search(root.right,value)
        }else{
            return this.search(root.left,value)
        }
    }
   leafNodes(root){
    if(!root) return 
    if(!root.left && !root.right){
        console.log(root.value)
        return
    }
    this.leafNodes(root.left)
    this.leafNodes(root.right)
   }
}
const bst = new BinarySearchTree()
bst.insert(5)
bst.insert(10)
bst.insert(15)
bst.insert(20)
bst.insert(25)
// console.log('Inorder')
// bst.inOrder(bst.root)
// console.log('Preorder');
// bst.preOrder(bst.root)
// console.log('Postorder');
// bst.postOrder(bst.root)

// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,100))

bst.leafNodes(bst.root)