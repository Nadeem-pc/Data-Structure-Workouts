class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode){
        if(newNode.value<root.value){
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right == null){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(root,value){
        if(!root){
            return false;
        }else{
            if(root.value===value){
                return true;
            }else if(root.value>value){
                return this.search(root.left, value);
            }else{
                return this.search(root.right, value);
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    levelOrder(){
        const queue = [];
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value;
        }else{
            return this.max(root.right)
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root,value);
    }
    deleteNode(root,value){
        if(root==null){
            return root;
        }
        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            //The node which have no child node
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
        
    }
    findClosest(target){
        let curr = this.root;
        let closest = this.root.value;
        while(curr){
            if(Math.abs(target-curr.value)<Math.abs(target-closest)){
                closest = curr.value;
            }
            if(target<curr.value){
                curr = curr.left;
            }else if(target > curr.value){
                curr = curr.right;
            }else{
                return
            }
        }
        return closest;
    }
    isBST(root,min=-Infinity ,max=Infinity){
        if(!root){
            return true;
        }
        if(root.value>=max || root.value<=min){
            return false;
        }
        return (this.isBST(root.left,min,root.value)&&this.isBST(root.right,root.value))
    }
    
    
}

const bst = new BinarySearchTree();
console.log('Tree is empty ?',bst.isEmpty())
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);
bst.insert(3);
console.log(bst.search(bst.root,11))
console.log(bst.search(bst.root,15))
console.log('Preorder traversal :')
bst.preOrder(bst.root)
console.log('Inorder traversal :')
bst.inOrder(bst.root)
console.log('Postorder traversal :')
bst.postOrder(bst.root);
bst.delete(15)
console.log('Bfs traversal :')
bst.levelOrder()
console.log('Minimum value is:',bst.min(bst.root))
console.log('Maximum value is:',bst.max(bst.root))
console.log('Closest value of ',12,' is:',bst.findClosest(12))