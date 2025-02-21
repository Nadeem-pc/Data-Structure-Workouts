// class Node {
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }
// class Trie {
//     constructor(){
//         this.root = new Node()
//     }
//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char] = new Node()
//             }
//             node = node.children[char]
//         }
//         node.isEndOfWord = true
//     }
//     prefix(prefix){
//         let node = this.root
//         for(let char of prefix){
//             if(!node.children[char]) return false
//             node = node.children[char]
//         }
//         return true
//     }
// }
// const trie = new Trie()
// trie.insert('car')
// trie.insert('cap')
// trie.insert('cat')
// console.log(trie.prefix('ca'))


class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinaryTree {
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode
        }else{
            this.balanceTree(this.root,newNode)
        }
    }
    balanceTree(root,newNode){
        if(!root) return 0
        let leftHeight = this.balanceTree(root.left,newNode)
        if(leftHeight === -1) return -1
        let rightHeight = this.balanceTree(root.right,newNode)
        if(rightHeight === -1) return -1
        if(Math.abs(leftHeight - rightHeight) > 1) return -1
        return Math.max(leftHeight,rightHeight) + 1
    }
}
const bt = new BinaryTree()
bt.insert(5)
bt.insert(25)
bt.insert(35)
bt.insert(15)