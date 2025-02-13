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

    // Insert a word into the Trie
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

    // Search for a complete word in the Trie
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // Check if a prefix exists in the Trie
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }

    // AUTOCOMPLETE FEATURE: Returns words that start with the given prefix
    autoComplete(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return 'No matches';
            node = node.children[char];
        }

        let words = [];
        this.collectWords(node, prefix, words);
        return words;
    }
    
    // Helper function for traversal to collect words
    collectWords(node, prefix, words){
        if(node.isEndOfWord){
            words.push(prefix)
        }
        for(let char in node.children){
            this.collectWords(node.children[char], prefix + char, words)
        }
    }
}

const trie = new Trie();
trie.insert('car');
trie.insert('cap');
trie.insert('cat');
trie.insert('care');
trie.insert('cargo');
trie.insert('dog');
trie.insert('doll');

console.log(trie.search("cat")); 
console.log(trie.startsWith("do"));

console.log(trie.autoComplete('ca'));   
console.log(trie.autoComplete('do'));   
console.log(trie.autoComplete('sh')); 