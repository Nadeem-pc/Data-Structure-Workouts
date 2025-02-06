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
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode){
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
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    printTree(){
        if(this.root === null){
            console.log('Tree is empty')
        }else{
            this.inOrder(this.root)
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            this.min(root.left)
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value){
        if(!root){
            return null
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        }
        else{
            if(!root.left && ! root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
    search(root,value){
        if(!root){
            return false
        }
        if(root.value === value){
            return true
        }
        if(root.value > value){
            return this.search(root.left,value)
        }
        return this.search(root.right,value)
    }
    isBst(root, min = -Infinity, max = Infinity){
        if(!root){
            return true
        }
        if(root.value > max || root.value <= min){
            return false
        }
        return(
            this.isBst(root.left,min,root.value) && 
            this.isBst(root.right,root.value,max)
        )
    }
    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let current = queue.shift()
            console.log(current.value);
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }
    depth(root){
        if(!root){
            return 0;
        }
        let leftDepth = this.depth(root.left);
        let rightDepth = this.depth(root.right);
        
        return Math.max(leftDepth, rightDepth) + 1;
    }
}
const bst = new Bst()
bst.insert(10)
bst.insert(5)
bst.insert(20)

console.log(bst.search(bst.root,10))
console.log(bst.isBst(bst.root))
bst.printTree()
console.log('bfs traversal')
bst.levelOrder()
console.log("Depth of BST:", bst.depth(bst.root)); 