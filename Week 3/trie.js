class Node {
    constructor() {
        this.children = {};  // Stores child nodes
        this.isEndOfWord = false; // Marks the end of a word
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
}

const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("dog");

console.log(trie.search("cat")); 
console.log(trie.search("cap")); 
console.log(trie.startsWith("ca"));
console.log(trie.startsWith("do"));
console.log(trie.startsWith("da"));