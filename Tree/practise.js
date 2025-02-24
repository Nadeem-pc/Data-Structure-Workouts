// class Node {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }
// class Bffffst {
//     constructor(){
//         this.root = null
//     }
//     insert(value){
//         const newNode = new Node(value)
//         if(!this.root){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root, newNode)
//         }
//     }
//     insertNode(root, newNode){
//         if(newNode.value < root.value){
//             if(!root.left){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left, newNode)
//             }
//         }else{
//             if(!root.right){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right, newNode)
//             }
//         }
//     }
//     height(root){
//         if(!root) return 0
//         let leftHeight = this.height(root.left)
//         let rightHeight = this.height(root.right)
//         return Math.max(leftHeight,rightHeight) + 1
//     }
// }
// const tree = new Bst()
// tree.insert(10)
// tree.insert(5)
// tree.insert(4)
// tree.insert(20)
// tree.insert(30)
// console.log(tree.height(tree.root));


class MaxHeap {
    constructor(){
        this.heap = []
    }
    getParentIndex(index){
        return Math.floor((index -1) / 2)
    }
    getLeftIndex(index){
        return 2 * index + 1
    }
    getRightIndex(index){
        return 2 * index + 2
    }
    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
        let index = this.heap.length -1
        while(index > 0){
            let parentIndex = this.getParentIndex(index)
            if(this.heap[parentIndex] < this.heap[index]){
                this.swap(parentIndex, index)
                index = parentIndex
            }else{
                break
            }
        }
    }
}
const heap = new MaxHeap()
heap.insert(10)
heap.insert(20)
heap.insert(5)
heap.insert(30)
console.log(heap.heap);
