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
        if(!this.root){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else
            this.insertNode(root.left,newNode)
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
            this.inOrder(root.left)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.inOrder(root.left)
            this.inOrder(root.right)
            console.log(root.value)
        }
    }
    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let current = queue.shift()
            console.log(current.value)
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }
    search(root,value){
        if(!root) return false
        if(root.value === value) return true
        if(root.value > value){
            return this.search(root.left,value)
        }
        return this.search(root.right,value)
    }
    min(root){
        if(!root.left){
            return root.value
        }
        return this.min(root.left)
    }
    max(root){
        if(!root.right){
            return root.value
        }
        return this.max(root.right)
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(!root) return null
        if(root.value > value){
            root.left = this.deleteNode(root.left,value)
        }
        else if(root.value < value){
            root.right = this.deleteNode(root.right,value)
        }
        else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.right){
                return root.left
            }
            else if(!root.left){
                return root.right
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

    isBst(root,min=-Infinity,max = Infinity){
        if(!root) return true
        if(root.value >= max || root.value < min){
            return false
        }
        return(
            this.isBst(root.left,min,root.value)&&
            this.isBst(root.right,root.value,max)
        )
    }
}
const bst = new BinarySearchTree()
bst.insert(19)
bst.insert(27)
bst.insert(16)
// console.log('Inorder traversal:')
// bst.inOrder(bst.root)
// bst.delete(27)
// console.log('after')
// bst.inOrder(bst.root)
// console.log('Preorder')
// bst.preOrder(bst.root)
// console.log('post order')
// bst.postOrder(bst.root)
// console.log(bst.search(bst.root,16))
// console.log('bfs traversal')
// bst.levelOrder()
console.log(bst.isBst(bst.root))
