// A callback function is simply a function that you pass as an argument to another function, giving the other function control over when to execute it.

setTimeout(function(){
    console.log("time")
}, 1000)
// Here, the first argument is a callback function (anonymous).

// The second argument is the delay (1000ms).

// After 1 second, JS executes that callback function by putting it into the call stack.

setTimeout(function () {
  console.log("timer");
}, 5000);

function x(callback) {
  console.log("x");
  callback();
}

x(function y() {
  console.log("y");
});
// output:  x
// y
// timer
// Why?

// Call stack executes x, then y immediately (synchronous).

// After 5 seconds, callback of setTimeout is put into the call stack → then timer\

//========================================

// Event listeners are another place where callbacks shine.

<button id = "btn">click me!</button>
document.getElementById("btn").addEventListener("click", function(){
    console.log("btn click")
})

// When user clicks, browser calls xyz callback and puts it on the call stack.

// Again → synchronous execution of callback once event happens.

//==================================================
console.log("Start");

setTimeout(function cb() {
  console.log("Timer Done");
}, 2000);

console.log("End");
// Execution Flow

// Call Stack: console.log("Start") → prints Start

// Call Stack: setTimeout(cb, 2000)

// JS doesn’t handle timer itself (since it’s single-threaded).

// It gives it to Web APIs (Browser APIs) to handle.

// Web APIs: start 2s timer.
// After 2s, callback cb is moved into Callback Queue.

// Call Stack: executes console.log("End") → prints End

// Event Loop: Checks if call stack is empty → yes.
// Moves cb from Callback Queue to Call Stack.

// Call Stack: executes cb() → prints Timer Done.
// Start
// End
// Timer Done   (after 2s)
