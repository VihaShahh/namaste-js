function add(a,b){
    return a+b
}
console.log(add(2,4))

const add1 = (a,b) => a+b;
console.log(add1(3,5))
//================================================
function isEven(num){
    return num % 2 == 0;
}
console.log(isEven(4))// true

const isOdd = (num) => num % 2 !== 0;
console.log(isOdd(6))// false
//============================================
function greet(name){
   return `hello ${name}`
}
console.log(greet("smitu babay"))

const greet1 = (namee) => { return`hello ${namee}`}
console.log(greet1("smitu saslu"))
//==========================================
function square(num){
    return num * num;
}
console.log(square(6))

const square1 = (num) => num * num;
console.log(square1(6))
//===================================================
function larger(a,b){
    return a>b ? a: b;
}
console.log(larger(10,20))
//=============================================
//Write a function that converts Celsius to Fahrenheit. Formula: F = (C * 9/5) + 32
function calculate(celsius){
    return (celsius * 9/5) + 32;
}
console.log(calculate(12))

const cal1 = (c) => (c * 9/5) + 32;
console.log(cal1(12))

//================================
// factorial using recursion
function factorial(n){
    if(n== 0 || n==1) return 1;
    return n * factorial(n-1);

}
console.log(factorial(5))

//================================
//prime number 

function isPrime(num){
    if(num <=1) return false;
    for(let i =2;  i * i <= num; i++){
         console.log(`Checking if ${num} is divisible by ${i}...`);
        if(num % i === 0){
             console.log(`${num} is divisible by ${i} → not prime`);
            return false// because it is not prime
        }
    }
    
  console.log(`No divisors found → ${num} is prime`);
    return true;// it is prime
}
console.log(isPrime(37))
//=======================================

// function to finf the largest no in an array

function findLargest(arr){
    if(arr.length === 0) return null;
    let bigNo = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > bigNo){
            bigNo = arr[i]
        }

    }
    return bigNo
}
console.log(findLargest([1,2,6,10,7,3,7,20]))
//=====================================

//function to reverse a string - str & array both indexing start from 0
function reverseString(str){
    let reverse = '';
    for( let i= str.length-1; i>=0; i--){
        reverse += str[i];

    }
return reverse;
}
console.log(reverseString("smitu saslu"))

//===================================
//palindrome
function isPalidrome(str){
    let reversed = '';
for(let i = str.length-1; i>=0; i--){
reversed += str[i]
}
return str === reversed
}
console.log(isPalidrome("mamj"))