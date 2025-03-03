// Queue Implementation using an Array
class Queue {
    constructor(){
        this.items = []
    }
    
    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            return 'Queue is empty'
        }
        return this.items.shift()
    }

    front(){
        if(this.isEmpty()){
            return 'Queue is empty'
        }
        return this.items[0] 
    }

    isEmpty(){
        return this.items.length === 0
    }

    size() {
        return this.items.length;
    }

    print(){
        console.log(this.items.join(" "));
    }
}
let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
queue.print()