// 1. Factorial 
function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial of (n - 1)
    return n * factorial(n - 1);
}

// console.log(factorial(5));  


// 2. Fibonacci
function fibonacci(n) {
    // Base case: Return n if n is 0 or 1
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    // Recursive case: fib(n) = fib(n - 1) + fib(n - 2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(2)); 


// 3. Reversing a string
function reverseStr (str){
    if(str === '') return ''
    return reverseStr(str.substring(1)) + str[0]
}
console.log(reverseStr('nadeem'));

// febonocci series
function fib(n){
    if(n<=1){
    return n
    }
    return fib(n-1)+fib(n-2)
}
let count=10
    for(let i=0;i<count;i++){
    console.log(fib(i))
}


function fib(n){
    if(n<=1){
      return n
    }
    return fib(n-1)+fib(n-2)
  }
  let count=5
  for(let i=0;i<count;i++){
      console.log(fib(i))
  }