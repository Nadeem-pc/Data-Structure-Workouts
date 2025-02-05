class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class Bst {
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
                this.insertNode(root.left, newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }
    inorderTraversal(root){
        if(root !== null){
            this.inorderTraversal(root.left)
            console.log(root.value)
            this.inorderTraversal(root.right)
        }
    }
    printTree(){
        if(this.root === null){
            console.log('Tree is empty')
        }else{
            this.inorderTraversal(this.root)
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value){
        if(root == null){
            return root
        }
        if(value < root.value){
            
        }
    }
}
const bst = new Bst();
bst.insert(10);
bst.insert(20);
bst.insert(5);
bst.printTree()