// Balanced binary tree implementation
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BalancedBinaryTree {
    constructor() {
        this.root = null;
    }
    
    insert(arr) {
        if (arr.length === 0) return null;

        this.root = new TreeNode(arr[0]);
        let queue = [this.root];

        let i = 1;
        while (i < arr.length) {
            let current = queue.shift();  

            if (i < arr.length) {   
                current.left = new TreeNode(arr[i++]);  
                queue.push(current.left);
            }
            if (i < arr.length) {  
                current.right = new TreeNode(arr[i++]);
                queue.push(current.right);
            }
        }
    }

    preOrder(node = this.root) {
        if (!node) return;
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
}

let tree = new BalancedBinaryTree();
tree.insert([1, 2, 3, 4, 5, 6, 7]);
tree.preOrder();