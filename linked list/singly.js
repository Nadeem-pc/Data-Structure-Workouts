// Creating a node
class Node {
    constructor(value) {
        this.value = value;  // This stores the value in the box.
        this.next = null;    // This is the link to the next box, initially set to nothing (null).
    }
}


// Adding to the back/Last/right
// class LinkedList {
//     constructor() {
//         this.head = null;  // At first, the list is empty, so the head is set to null.
//     }


//     push(data){
//         const newNode = new Node(data)
//         if(this.head === null){
//            this.head = newNode;  // The new box becomes the head (the first box in the list).
//         }else{
//             let current = this.head                  // Start at the first box.
//             while(current.next !== null){           // Move to the next box until you reach the last one.
//                 current = current.next 
//             }
//             current.next = newNode      // Link the last box to the new box.
//         }
//     }

//     print(){
//         if(this.head === null){
//             console.log("Linked list is empty");
//         }else{
//             let current = this.head
//             let listValues = ""
//             while(current){
//                 listValues += `${current.value} `
//                 current = current.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkedList()
// list.push(3)
// list.push(1)
// list.print()


// Adding on front/first/left
class LinkedList {
    constructor(){
        this.head = null
    }

    prepent(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
    }

// INSERTING AT A SPECIFIC POSITION
insertAtSpecific(data,position){
    if(position < 0){
        console.log("Invalid");
    }else if(position === 0){
        this.prepent(data)
    }else{
        const newNode = new Node(data)
        let current = this.head
        for(let i = 0; i < position -1; i++){
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode          
    }
}

    print(){
        if(this.head === null){
            console.log("Linked list is empty");
        }else{
            let current = this.head
            let listValues = ""
            while(current){
                listValues += `${current.value} `
                current = current.next
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList()

list.prepent(300)
list.prepent(200)
list.prepent(100)
list.insertAtSpecific(150,1)
list.print()