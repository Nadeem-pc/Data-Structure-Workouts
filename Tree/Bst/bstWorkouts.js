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
    isBalancedHelper(root) {
        if (!root) return 0; 

        let leftHeight = this.isBalancedHelper(root.left);
        if (leftHeight === -1) return -1; 

        let rightHeight = this.isBalancedHelper(root.right);
        if (rightHeight === -1) return -1; 

        if (Math.abs(leftHeight - rightHeight) > 1) return -1; 
        return Math.max(leftHeight, rightHeight) + 1; 
    }
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
    findKthSmallest(k) {
        let count = 0;
        let result = null;

        const inOrder = (node) => {
            if (!node || count >= k) return;

            inOrder(node.left); 

            count++;
            if (count === k) {
                result = node.value;
                return;
            }

            inOrder(node.right);  
        };

        inOrder(this.root);
        return result;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);
bst.insert(3);

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