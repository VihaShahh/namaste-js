function greet(name, callback){
    console.log("hi," +name)
    callback()
}
function bye(){
    console.log("bye")
}
greet("viha", bye)

//output: hi, viha
//        bye

//=======================================
//synchronous callback
function process(no, callback){
    return callback(no)
}
//Take the callback function, and call it with num (which is 5).
console.log(process(5, n => n*n))//25

console.log(process(6,n =>n+1))//7
//hereprocess calls callback right away with the number.

// The callback runs immediately (synchronously).
// The result is returned directly

//asynchronous callback
setTimeout(() =>{
    console.log("hi after some time")
}, 3000)

//===============================================
let nums = [1,2,3,4]
let double = nums.map(no =>no *2)
console.log(double)//[2,4,6,8]

//in event listener
// document.getElementById("btn").addEventListener("click",function(){
//     console.log("btn clicked")
// })
// // addEventListener is a higher-order function provided by the DOM API.

// It takes two arguments:

// The event type ("click")

// A callback function (anonymous function here).
// The callback function is not called immediately.
// Instead, the browser stores it and waits until the "click" event happens.When the event occurs, the browser calls the callback function automatically.

// So the callback is applied later, when the event fires.

//============================================

function fetchData(callback){
    setTimeout(() =>{
        console.log("data fetched")
        callback()
    }, 2000)
}
fetchData(() => console.log("processing"))

//here 

// // in Call fetchData You pass () => console.log("Now process the data...") as the callback.

// Inside fetchData

// A setTimeout is scheduled to run after 2000 ms (2 sec).

// Nothing is printed yet.

// Wait for 2 seconds...

// JavaScript continues doing other work (non-blocking).

// After 2 seconds

// The code inside setTimeout runs:

// First → console.log("Data fetched!");
// prints "Data fetched!"

// Then → callback(); executes your passed function.

// That means → console.log("Now process the data...");
//prints "Now process the data..."

// Output (with 2 sec delay):
// Data fetched
// processing

//==============================================

//callback hell
getUser(1, function(user){
    getOrders(user.id, function(orders){
        getOrderDetails(orders[0], function(details){
            console.log(details)
        })
    })
})
//Because each next operation depends on the result of the previous one:

// Need the user first → then fetch their orders → then fetch details of an order → then log it.

// This style is called Callback Hell (or Pyramid of Doom) because of the nesting.
// That’s why Promises and async/await were introduced.
//==============================
function checkNumber(no, callback){
    if(no % 2 ==0){
        callback("even")
    }
    else{
        callback("odd")
    }
}
checkNumber(5, (callback) => console.log(callback))//odd
//It takes one argument (you named it callback, but actually it's just a value, e.g. "odd")

// Prints that value.

//synchronus callback

function calculates(a,b, callback){
    return callback(a,b)
}
function add(a,b){
    return a+b
}
function multiply(a,b)
{
    return a*b
}
console.log(calculates(2,3,add))//5

//async

function readFile(fileName, callback){
    console.log("reading file", fileName)
    setTimeout(() =>{
        let fileData = "file data" + fileName
        callback(fileData)
    }, 2000)
}

readFile("data.txt", (data) =>{
    console.log("file data recieved", data)
})

//here
// ```js
// function readFile(fileName, callback) {
//   console.log("Reading file:", fileName);

//   setTimeout(() => {
//     let fileData = "File content of " + fileName;

//     callback(fileData); // <-- main part
//   }, 2000);
// }

// readFile("data.txt", (data) => {
//   console.log("File data received:", data);
// });
// ```

// ---

// ### Step 1: Call `readFile`

// When you run:

// ```js
// readFile("data.txt", (data) => {
//   console.log("File data received:", data);
// });
// ```

//  `fileName = "data.txt"`
//  `callback = (data) => { console.log("File data received:", data); }`

// So inside the function, `callback` is actually that arrow function.

// ---

// ### Step 2: Inside `readFile`

// ```js
// console.log("Reading file:", fileName);
// ```

//  This runs immediately.
// So first output =

// ```
// Reading file: data.txt
// ```

// Then, `setTimeout` is scheduled.
// JavaScript waits **2 seconds** before running the code inside `setTimeout`.

// ---

// ### Step 3: After 2 seconds

// `setTimeout` executes:

// ```js
// let fileData = "File content of " + fileName;
// // fileData = "File content of data.txt"

// callback(fileData);
// ```

//  Here `callback(fileData)` means:
// "Call the function we passed (`(data) => { console.log(...); }`) and give it `fileData` as an input."

// So it’s the same as writing:

// ```js
// (data) => {
//   console.log("File data received:", data);
// }("File content of data.txt");
// ```

// ---

// ### Step 4: What the callback does

// That callback just logs the data:

// ```
// File data received: File content of data.txt
// ```

// ---

// ###  Final Output (after running whole code):

// ```
// Reading file: data.txt
// // (2 seconds pause)
// File data received: File content of data.txt
// ```

// ---
//  So the key:

// * `callback(fileData)` **calls the function you gave**.
// * It passes `"File content of data.txt"` as the `data` argument.
// * That’s why you see `"File data received: File content of data.txt"` after 2 sec.

