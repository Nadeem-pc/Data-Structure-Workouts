class Node {
    constructor(value){
        this.value = value
        this.next = null
        let prev = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }

    prepend(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
    }

    print(){
        let current = this.head
        let listValues = ""
        while(current){
            listValues += `${current.value} <-> `
            current = current.next
        }
        console.log(listValues + 'null')
    }
}

const list = new DoublyLinkedList()
list.prepend(0)
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.print()

// --------------------------------------------------------

append(data){
    const newNode = new Node (data)
    if(this.tail === null){
        this.head = newNode
        this.tail = newNode
    }else{
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
    }
}

// ----------------------------------------------------------

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    insertAtSpecific(index,value){
        if(index < 0 || index > this.size){
            console.log("Invalid position");
        }
        const newNode = new Node(data)
        if(index === 0){
            if(this.head === null){
                this.head = newNode
                this.tail = newNode
            }else{
                newNode.next = this.head
                this.head.prev = newNode
                this.head = newNode
            }
        }else if(index === this.size){
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }else{
            let current = this.head
            for(let i = 0; i < index -1; i++){
                current = current.next
            }
            newNode.next = current.next
            newNode.prev = current
            if(current.next){
                current.next.prev = newNode
            }
            current.next = newNode;
        }
        this.size++;
    }
    print() {
        let current = this.head;
        let listValues = "";
        while (current) {
            output += `${current.value} <-> `;
            current = current.next;
        }
        console.log(listValues + "null");
    }
}