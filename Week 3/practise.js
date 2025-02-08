class Node {
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}
class Trie {
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }    
    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]) return false
            node = node.children[char]
        }
        return node.isEndOfWord
    }
    startWith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]) return false
            node = node.children[char]
        }
        return true
    }
    getAllWords(){
        let words = []
        this._dfs(this.root, "", words)
        return words
    }
    _dfs(node, count){
        if(node.isEndOfWord){
            count++
        }
        // for(let char in node.children){
        //     this._dfs(node.children[char], prefix + char, words)
        // }
    }
    autoComplete(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]) return 'No matches'
            node = node.children[char]
        }
        let words = []
        this._dfs(node,prefix,words)
        return words
    }
    countWords(){
        return this.countWordsHelper(this.root)
    }
    countWordsHelper(node){
        let count = 0
        if(node.isEndOfWord) count++
        for(let char in node.children){
            count += this.countWordsHelper(node.children[char])
        }
        return count
    }
} 
const trie = new Trie()
trie.insert('car')
trie.insert('cap')
trie.insert('sherin')
// console.log(trie.search('cap'));
// console.log(trie.startWith('she'));
// console.log(trie.startWith('raja'));
// console.log(trie.getAllWords())
// console.log(trie.autoComplete('ca'));  
// console.log(trie.autoComplete('do'));  
// console.log(trie.autoComplete('sh'));  
console.log(trie.countWords());