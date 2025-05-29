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
        this.heapifyDown(0);
        return min
    }

    heapifyDown(i){
        let n = this.heap.length
        let arr = this.heap
        let smallest = i;    
        let left = 2*i+1;
        let right = 2*i+2;
        if(left<n && arr[left]<arr[smallest]){
            smallest = left
        }
        if(right<n && arr[right]<arr[smallest]){
            smallest = right;
        }
        if(smallest!==i){
            [arr[i],arr[smallest]]=[arr[smallest],arr[i]];
            this.heapifyDown(smallest);
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
console.log(heap.peek());
console.log(heap.heap);
console.log(heap.extractMin());
console.log(heap.heap)
console.log(heap.peek());