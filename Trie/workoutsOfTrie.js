class Node {
    constructor() {
        this.children = {};
        this.isEndOfWord = false; 
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
                if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Retrieve all words stored in the Trie
    getAllWords(){
        let words = []
        this._dfs(this.root, "", words)
        return words
    }
    
    _dfs(node, prefix, words){
        if(node.isEndOfWord){
            words.push(prefix)
        }
        for(let char in node.children){
            this._dfs(node.children[char], prefix + char, words)
        }
    }

    // Count total words stored in Trie
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

    // Find the longest common prefix
    findLongestCommonPrefix() {
        let prefix = "";
        let node = this.root;

        while (node) {
            let keys = Object.keys(node.children);

            if (keys.length !== 1 || node.isEndOfWord) break;

            let nextChar = keys[0];
            prefix += nextChar;
            node = node.children[nextChar];
        }
        return prefix;
    }
}

const trie = new Trie();
trie.insert('car');
trie.insert('cap');
trie.insert('cat');
trie.insert('care');
trie.insert('cargo');
// trie.insert('dog');
// trie.insert('doll');

console.log('Printing all the words in the trie')
console.log(trie.getAllWords())

console.log("Total words in Trie:", trie.countWords());

console.log(trie.findLongestCommonPrefix());