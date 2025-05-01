// Collision handling using Chaining
class HashTable {
    constructor(size = 10) {
        this.table = new Array(size);
    }
  
    _hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.table.length;
    }
  
    set(key, value) {
        const index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        this.table[index].push([key, value]);
    }
  
    get(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (bucket) {
            for (let [k, v] of bucket) {
                if (k === key) {
                    return v;
                }
            }
        }
        return undefined;
    }
  
    delete(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (bucket) {
            this.table[index] = bucket.filter(([k, _]) => k !== key);
        }
    }

    display(){
        this.table.forEach((bucket,index)=>{
            if(bucket){
                bucket.forEach(([key, value]) => console.log(`${key} : ${value}`));
            }
        })
    } 
}

const hashTable = new HashTable();
hashTable.set("name", "Alice");
hashTable.set("age", 25);
hashTable.display()
console.log("Get name:", hashTable.get("name"));
console.log("Get age:", hashTable.get("age")); 
hashTable.delete("name");
console.log("Get name after delete:", hashTable.get("name")); 


// Collision handling using Linear probing
class HashTable2 {
    constructor(size = 5) {
        this.table = new Array(size);
        this.size = size;
    }

    _hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    set(key, value) {
        let index = this._hash(key);

        while (this.table[index] && this.table[index][0] !== key) {
            index = (index + 1) % this.size;  
        }

        this.table[index] = [key, value];  
    }

    get(key) {
        let index = this._hash(key);

        while (this.table[index]) {
            if (this.table[index][0] === key) {
                return this.table[index][1]; 
            }
            index = (index + 1) % this.size;
        }

        return undefined;  
    }

    display() {
        this.table.forEach(entry => {
            if (entry) {
                console.log(`${entry[0]} : ${entry[1]}`);
            }
        });
    }
}

const table = new HashTable2();
table.set('name', "Nadeem");
table.set('age', 18);
table.set('dream', "BMW M5 CS");
table.display();

console.log("Value for 'age':", table.get('age'));  
console.log("Value for 'unknown':", table.get('unknown')); 


// Rehashing
class HashTable3 {
    constructor(size = 3){
        this.table = new Array(size)
        this.count = 0
    }

    _hash(key){
        let hash = 0
        for(let char of key){
            hash += char.charCodeAt(0)
        }
        return hash % this.table.length
    }

    set(key,value){
        if(this.count / this.table.length >= 0.7){
            console.log('Original size: ',this.table.length)
            this.rehash()
            console.log("Size after rehashing:", this.table.length);
        }

        let index = this._hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }

        for(let pair of this.table[index]){
            if(pair[0] === key){t
                pair[1] = value
                return 
            }
        }

        this.table[index].push([key,value])
        this.count ++
    }

    rehash(){
        console.log('Rehashing...')
        const oldTable = this.table
        this.count = 0
        this.table = new Array(this.table.length * 2)
        
        for(let bucket of oldTable){
            if(bucket){
                for (let [key, value] of bucket){
                    this.set(key, value); 
                }
            }
        }
    }

    display(){
        this.table.forEach(bucket => {
            if(bucket){
                bucket.forEach(([key,value])=> console.log(`${key} : ${value}`))
            }
        })
    }
}
const table2 = new HashTable3();
table2.set('name','Nadeem')
table2.set('age',18)
table2.set('eman','Raja')
table2.set('gea',17)
table2.display()


// Double hashing
class HashTable4 {
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;
    }

    // Primary Hash Function
    _hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    // Secondary Hash Function
    _hash2(key) {
        let hash = 1;             
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return (hash % (this.size - 1)) + 1;
    }

    set(key, value) {
        let index = this._hash(key)
        const step = this._hash2(key)
        let i = 0
        let newIndex = index
        while(this.table[newIndex] && this.table[newIndex][0] !== key){
            i++
            newIndex = (index + i * step) % this.size
        }
        this.table[newIndex] = [key,value]
    }

    get(key) {
        let index = this._hash(key);
        let step = this._hash2(key);
        let i = 0;

        while (this.table[index]) {
            if (this.table[index][0] === key) return this.table[index][1];
            i++;
            index = (index + i * step) % this.size;
        }
        return undefined;
    }

    display() {
        this.table.forEach((bucket,index) => {
            if(bucket){
            console.log(`${bucket[0]} : ${bucket[1]}`)
            }
        })
    }
}

const hashTable4 = new HashTable()
hashTable.set('name','Nadeem')
hashTable.set('mean', 'Developer');
hashTable.set('dream','BMW M5 Cs')
hashTable.set('car', 'Porsche 911');
hashTable.set('race', 'Formula 1'); 
hashTable.display()


// Hashtable using Linked list
class ListNode {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class HashTableUsingLL {
    constructor(size = 10) {
        this.table = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        const index = this._hash(key);
        let head = this.table[index];

        // Update if key exists
        while (head) {
            if (head.key === key) {
                head.value = value;
                return;
            }
            head = head.next;
        }

        // Insert new node at beginning
        const newNode = new ListNode(key, value, this.table[index]);
        this.table[index] = newNode;
    }

    get(key) {
        const index = this._hash(key);
        let head = this.table[index];

        while (head) {
            if (head.key === key) {
                return head.value;
            }
            head = head.next;
        }

        return undefined;
    }

    delete(key) {
        const index = this._hash(key);
        let head = this.table[index];
        let prev = null;

        while (head) {
            if (head.key === key) {
                if (prev) {
                    prev.next = head.next;
                } else {
                    this.table[index] = head.next;
                }
                return;
            }
            prev = head;
            head = head.next;
        }
    }

    display() {
        this.table.forEach((head, index) => {
            let current = head;
            while (current) {
                console.log(`${current.key} : ${current.value}`);
                current = current.next;
            }
        });
    }
}

const tableUsingLL = new HashTableUsingLL();
tableUsingLL.set("name", "Alice");
tableUsingLL.set("age", 25);
tableUsingLL.set("gender", "female");

tableUsingLL.display();

console.log("Get name:", tableUsingLL.get("name")); 
console.log("Get age:", tableUsingLL.get("age"));   

tableUsingLL.delete("name");

console.log("Get name after delete:", tableUsingLL.get("name")); 