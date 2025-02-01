const array = [5,7,1,9,2,27]
function bubbleSort(arr){
    let swapped 
    for(let i = 0; i < arr.length; i++){
        swapped = false
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                swapped = true
            }
        }
        if(!swapped) break
    }
    return arr
}
console.log('Bubble sort: ',bubbleSort(array))

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
    return arr
}
console.log('Insertion sort: ',insertionSort(array));

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minIndex = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            [arr[i],arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}
console.log('Selection sort: ',selectionSort(array))

function mergeSort(arr){
    if(arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left,right)
}
function merge(left,right){
    let result = []
    let i = 0, j = 0
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}
console.log('Merge sort: ',mergeSort(array));

function quickSort(arr){
    if(arr.length <= 1) return arr

    let pivot = arr[arr.length -1]
    let left = []
    let right = []

    for(let i = 0; i < arr.length -1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log('Quick sort: ',quickSort(array))

class Queue {
    constructor(){
        this.items = []
    }

    enqueue(value){
        this.items.push(value)
    }

    dequeue(){
        if(this.isEmpty()){
            return 'Queue is empty'
        }
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(this.isEmpty()){
            return 'Queue is empty'
        }
        return this.items[0]
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.join(' '))
    }
}

function reverseQueue(queue){
    let stack = []
    while(!queue.isEmpty()){
        stack.push(queue.dequeue())
    }
    while(stack.length > 0){
        queue.enqueue(stack.pop())
    }
}

let queue = new Queue()
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)

console.log('\n','Original Queue');
queue.print()

reverseQueue(queue)
console.log('Reversed queue')
queue.print()   