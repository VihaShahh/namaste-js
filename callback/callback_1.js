//basic
function greet(name, callback){
    console.log("hello" , name)
    callback()
}

function bye(){
    console.log("goodboy")
}
greet("viha", bye)
//===============================================
//anonymous callback

function process(callback) {
    let name = "viha";      // Step 1: define name
    callback(name);         // Step 2: call the callback with "viha"
}

process(function(name) {    // Step 3: pass an anonymous function
    console.log("welcome", name);  // Step 4: callback runs → "welcome viha"
});

//with arrow function
function process(callback) {
    let name = "viha";
    callback(name);
}

process((name) => console.log("welcome", name));

//=====================================================
//Callback with setTimeout (Async Example)

console.log("start")

setTimeout(function(){
    console.log("runs are 2 secs")
}, 2000)

console.log("end")

//=======================================================
//Array Method (forEach uses a callback)

let nos = [1,2,3]
nos.forEach(function(number){
    console.log(number * 2)
})

//with arrow
nos.forEach((no1) => console.log(no1 * 3))
//==============================================================
// Que: Write a function greetUser(name, callback) that:

// Prints "Hello <name>".

// Then calls the callback function to say "Have a nice day!".
function getUser(name, callback){
    console.log("hello" , name)
    callback()
}
function hii(){
    console.log("have a nice day")
}
getUser("viha", hii)

// //Create a function sum(a, b, callback) that:

// Calculates the sum of two numbers.

// Passes the result to the callback, which logs "Result is <sum>".

function sum(a,b, callback1){
    const result =  a+b
    callback1(result)
}
function log(result){
    console.log(result)
}
sum(10,20,log)

// //Use setTimeout with a callback to:

// Print "Start".

// After 3 seconds, print "End".
console.log("start")
setTimeout(function(){
    console.log("end")
},3000)

function fetchData(callback){
    console.log("fatching data")
    setTimeout(function(){
        const data = [1,2,3,4]
        callback(data)
    }, 2000)
}

fetchData(function(data){
    console.log(data)
})


//Array.map()

const numbers = [1,2,34,56]
const double  = numbers.map(function(no){
    return no * 2
})
// map() is an array method.
// It takes a callback function as an argument.

// The callback runs once for each element of the array.

// Whatever the callback returns for each element is collected into a new array (does not change the original).
console.log(double)

//===================================================

// ### 🔹 Your `readFile` code

```js
function readFile(fileName, callback) {
    console.log("Reading file:", fileName);

    setTimeout(function() {   // ⬅️ callback 1 (for setTimeout)
        callback("File content of " + fileName);  // ⬅️ callback 2 (user’s function)
    }, 1000);
}

// Usage
readFile("data.txt", function(content) {   // ⬅️ callback 3 (passed by user)
    console.log(content);
});
```

// ---

// ###  Explanation of callbacks here

// 1. **`function() { ... }` inside `setTimeout`**

//    * This is a **callback passed to setTimeout**.
//    * JavaScript waits 1 second, then runs it.

// 2. **`callback("File content...")` inside that function**

//    * This calls the **callback function provided to `readFile`**.
//    * `readFile` itself doesn’t know what the callback is — the user provides it.

// 3. **`function(content) { console.log(content) }` in `Usage`**

//    * This is the **actual function you (the user) passed** to `readFile`.
//    * When executed, it prints the file content.

// ---

// ### 🔹 So how many?

//  **3 callbacks in total** are involved here:

// * **Callback 1** → given to `setTimeout`.
// * **Callback 2** → placeholder `callback` inside `readFile` (not written directly, but invoked).
// * **Callback 3** → the actual function `(content) => console.log(content)` passed by the user.

