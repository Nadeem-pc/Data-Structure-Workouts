class MinHeap{
    constructor(){
        this.heap =[]
    }

    getParentIndex(index){
        return Math.floor((index-1)/2);
    }
    getLeftIndex(index){
        return 2*index+1;
    }
    getRightIndex(index){
        return 2*index+2;
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]];
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp(){
        let index = this.heap.length-1;
        while(index>0){
            let parentIndex =this.getParentIndex(index);
            if(this.heap[parentIndex]>this.heap[index]){
                this.swap(parentIndex,index);
                index = parentIndex;
            }else{
                break;
            }
        }
    }

    extractMin(){
        if(this.heap.length==0) return null;
        if(this.heap.length==1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min
    }

    heapifyDown(){
        let index = 0;
        while(this.getLeftIndex(index)<this.heap.length){
            let smaller = this.getLeftIndex(index);
            let right = this.getRightIndex(index);
            if(right < this.heap.length && this.heap[right] < this.heap[smaller]){
                smaller = right;  
            }
            if(this.heap[index] > this.heap[smaller]){
                this.swap(index,smaller);
                index = smaller;

            }else{
                break
            }
        }
    }
    
    peek(){
        return this.heap.length>0?this.heap[0]:null
    }
}

const heap = new MinHeap();
heap.insert(10);
heap.insert(9);
heap.insert(12);
heap.insert(8);
heap.insert(2);
console.log(heap.heap);
console.log(heap.peek());
console.log(heap.extractMin());
console.log(heap.peek());