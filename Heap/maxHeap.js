class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftIndex(index) {
        return 2 * index + 1;
    }

    getRightIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] < this.heap[index]) { 
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    heapifyDown(i){
        let n = this.heap.length
        let largest = i
        let left = this.getLeftIndex(i)
        let right = this.getRightIndex(i)
        
        if(left < n && this.heap[left] > this.heap[largest]){
            largest = left
        }
        if(right < n && this.heap[right] > this.heap[largest]){
            largest = right
        }
        if(largest !== i){
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]]
            this.heapifyDown(largest)
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}

const heap = new MaxHeap();
heap.insert(10);
heap.insert(9);
heap.insert(12);
heap.insert(8);
heap.insert(2);

console.log(heap.heap); 
// console.log(heap.peek()); 
heap.extractMax()
console.log(heap.heap); 