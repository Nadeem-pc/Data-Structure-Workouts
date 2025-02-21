class Node{
    constructor(value){ 
        this.value = value
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
        if(!root) return null

        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
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
    findClosest(target) {
        let curr = this.root;
        let closest = this.root.value;
    
        while (curr) {
            if (Math.abs(target - curr.value) < Math.abs(target - closest)) {
                closest = curr.value;
            }
            if (target < curr.value) {
                curr = curr.left;
            } else if (target > curr.value) {
                curr = curr.right;
            } else {
                return;
            }
        }
        return closest;
    }
    findDegree(root, value) {
        if (!root) return -1; 
    
        if (root.value === value) {
            let degree = 0;
            if (root.left) degree++;
            if (root.right) degree++;
            return degree;
        }
    
        if (value < root.value) {
            return this.findDegree(root.left, value);
        } else {
            return this.findDegree(root.right, value);
        }
    }
    isBst(root, min = -Infinity, max = Infinity){
        if(!root){
            return true
        }
        if(root.value >= max || root.value < min){
            return false
        }
        return(
            this.isBst(root.left,min,root.value) && 
            this.isBst(root.right,root.value,max)
        )
    }
    height(root) {
        if (!root) return 0;
        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    depth(root, node, currentDepth = 0) {
        if (!root) return -1;
        if (root.value === node) return currentDepth;
    
        if (node < root.value) {
            return this.depth(root.left, node, currentDepth + 1);
        } else {
            return this.depth(root.right, node, currentDepth + 1);
        }
    }
    isSameTree(root1, root2){
        if(!root1 && !root2) return true
        if(!root1 || !root2) return false
        if(root1.value !== root2.value) return false
        return this.isSameTree(root1.left, root2.left) && this.isSameTree(root1.right, root2.right)
    }
    findLeafNodes(root) {
        if (!root) return;
    
        if (!root.left && !root.right) {
            console.log(root.value); 
            return
        }
        this.findLeafNodes(root.left);
        this.findLeafNodes(root.right)
    }
    // Helper function to check if the tree is balanced
    isBalancedHelper(root) {
        if (!root) return 0; 

        let leftHeight = this.isBalancedHelper(root.left);
        if (leftHeight === -1) return -1; 

        let rightHeight = this.isBalancedHelper(root.right);
        if (rightHeight === -1) return -1; 

        if (Math.abs(leftHeight - rightHeight) > 1) return -1; 
        return Math.max(leftHeight, rightHeight) + 1; 
    }
    // Main function to check if the BST is balanced
    isBalanced() {
        return this.isBalancedHelper(this.root) !== -1;
    }
    findSecondSmallest() {
        let count = 0;
        let secondSmallest = null;

        function inOrderTraversal(node) {
            if (!node || count >= 2) return;

            inOrderTraversal(node.left); 

            count++;
            if (count === 2) {
                secondSmallest = node.value;
                return;
            }

            inOrderTraversal(node.right); 
        }

        inOrderTraversal(this.root);
        return secondSmallest;
    }
    findSecondLargest() {
        let count = 0;
        let secondLargest = null;

        function reverseInOrderTraversal(node) {
            if (!node || count >= 2) return;

            reverseInOrderTraversal(node.right); 
            count++;
            if (count === 2) {
                secondLargest = node.value;
                return;
            }

            reverseInOrderTraversal(node.left);
        }

        reverseInOrderTraversal(this.root);
        return secondLargest;
    }
    findKthLargest(k) {
        let count = 0;
        let result = null;

        const reverseInOrder = (node) => {
            if (!node || count >= k) return;

            reverseInOrder(node.right);  

            count++;
            if (count === k) {
                result = node.value;
                return;
            }

            reverseInOrder(node.left); 
        };

        reverseInOrder(this.root);
        return result;
    } 
}

const bst = new BinarySearchTree();
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

console.log('Bfs traversal :')
bst.levelOrder()

bst.delete(15)

console.log('Minimum value is:',bst.min(bst.root))
console.log('Maximum value is:',bst.max(bst.root))

console.log('Closest value of 6',bst.findClosest(6))

console.log("Height of BST:", bst.height(bst.root));
console.log("Depth of node 7:", bst.depth(bst.root, 7)); 

console.log("Degree of node 10:", bst.findDegree(bst.root, 10)); 
console.log("Degree of node 5:", bst.findDegree(bst.root, 5)); 

console.log("Leaf nodes in BST:");
bst.findLeafNodes(bst.root);

console.log(bst.findKthLargest(1));
console.log(bst.findKthLargest(3)); 


// Checking is same tree
const bst1 = new BinarySearchTree();
const bst2 = new BinarySearchTree();

bst1.insert(10);
bst1.insert(5);
bst1.insert(15);

bst2.insert(10);
bst2.insert(5);
bst2.insert(15);

console.log(bst1.isSameTree(bst1.root, bst2.root)); 
bst2.insert(7);
console.log(bst1.isSameTree(bst1.root, bst2.root));

console.log("Is the BST balanced?", bst.isBalanced()); 

console.log("2nd Smallest:", bst.findSecondSmallest()); 
console.log("2nd Largest:", bst.findSecondLargest()); 