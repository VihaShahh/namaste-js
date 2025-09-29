console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
//output
// Start
// End
// Promise
// Timeout
// console.log("Start") → prints Start.

// setTimeout(..., 0) → goes to Web APIs → then Callback Queue.

// Promise.resolve().then(...) → goes to Microtask Queue.

// console.log("End") → prints End.

// Call Stack empty → Event Loop checks Microtask Queue first.

// Executes Promise callback → prints Promise.

// Then Event Loop checks Callback Queue.

// Executes setTimeout callback → prints Timeout.
//  Why Microtasks First?

// Microtasks are usually small & critical jobs (like Promise chains).

// JS ensures they run immediately after the current stack before handling lower-priority events (timeouts, user clicks, etc.).

// This makes Promises more predictable.

//  Golden Rules

// Microtasks > Macrotasks

// Even if setTimeout(fn, 0) is scheduled, all Microtasks run first.

// If Microtasks keep adding more Microtasks (like infinite Promise loops), Callback Queue will starve → browser can freeze.