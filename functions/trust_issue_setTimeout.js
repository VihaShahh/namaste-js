console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");
// Assume 1M lines of heavy code here


// Execution Flow:

// Start → printed immediately.
// (Global Execution Context is created, pushed to call stack, runs line by line).

// setTimeout(cb, 5000) is hit:

// JS registers cb with the browser’s Web API (outside JS engine).

// A 5s timer starts in the browser environment, NOT in JS engine.

// JS engine moves on immediately (doesn’t wait for 5s).

// End → printed immediately.
// (Because JS just keeps running synchronously).

// Meanwhile, in background:

// After 5s, the timer expires.

// Browser moves cb into the callback queue.

// Event Loop’s job:

// Keeps checking: “Is the call stack empty?”

// If yes, move the oldest callback from queue → stack.

// If no, keep waiting.

// Here, suppose you had 1M heavy lines of code that took 10 seconds to finish.

// The Global Execution Context (GEC) is still sitting in the stack.

// So even though the timer expired at 5s, cb waits in the queue.

// Only after 10s, when the stack is empty, the event loop moves cb to the stack.

// Finally → "Callback" is printed (after ~10s, not 5s).

//  This is why we say setTimeout has “trust issues.”
// It guarantees a minimum delay, but never guarantees the exact delay.

//================================================
//What if timeout = 0?
console.log("Start");

setTimeout(() => console.log("Callback"), 0);

console.log("End");
// You might think: “0 means run immediately!” ❌
// Nope. It still has to:

// Register callback in Web API.

// Push callback into queue.

// Wait for stack to empty.

// Then event loop pushes it into stack.

//output
// Start
// End
// Callback
