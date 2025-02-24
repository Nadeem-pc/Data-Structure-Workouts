// 1. Factorial 
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));  


// 2. Fibonacci
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
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
    if(n <= 1){
        return n
    }
    return fib(n - 1) + fib(n - 2)
}
let count = 10
    for(let i = 0; i < count; i++){
    console.log(fib(i))
}