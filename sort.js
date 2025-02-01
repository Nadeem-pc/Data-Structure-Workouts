function quickSort(arr){
    if(arr.length <=1)return arr
    
   let mid = Math.floor(arr.length/2)
   let left = quickSort(arr.slice(0,mid))
   let right = quickSort(arr.slice(0))
   return merge(left,right)
}
function merge(left,right){
    let result = []
    let i=0,j=0
    for(let i=0;i<arr.length;i++){
        if(i<le)
    }
}
const arr = [1,5,3,8,3]
console.log(quickSort(arr))