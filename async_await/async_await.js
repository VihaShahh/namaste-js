// An async function always returns a Promise.
// Even if you return a plain value, JavaScript wraps it inside a Promise.
async function greet() {
  return "Hello World";
}

console.log(greet()); // Promise {<fulfilled>: "Hello World"}

// To get the actual value, you must either use .then or await.

//==================================================================
const p = new Promise(resolve => {
  setTimeout(() => resolve("Done!"), 2000);
});

async function getData() {
  console.log("Before await");
  const result = await p;  // waits here, suspends function
  console.log("After await:", result);
}

getData();
// Output:
// Before await
// (2 sec wait)
// After await: Done!
//========================================================================

// 🔹 4. Async vs .then

// Consider a promise that resolves in 3 seconds:

const p1 = new Promise(resolve => {
  setTimeout(() => resolve("Done!"), 3000);
});

//Using .then
p1.then(res => console.log(res));
console.log("Hello");
// Output: Hello (immediately)
//         Done! (after 3s)

// Using async/await
async function run() {
  const res = await p1;  // waits here before moving on
  console.log("Hello");
  console.log(res);
}
run();
// Output: (3s wait)
//         Hello
//         Done!


// Key Difference:

// .then → continues execution immediately, results come later.

// await → makes code look synchronous, execution continues only after resolution.

//======================================================
const p9 = new Promise(r => setTimeout(() => r("p1 done"), 3000));
const p2 = new Promise(r => setTimeout(() => r("p2 done"), 2000));

async function run() {
  console.log("Start");

  const res1 = await p9;  // waits 3s
  console.log(res1);

  const res2 = await p2;  // waits extra 2s (total 5s)
  console.log(res2);
}
run();

//Notice: Even though p2 resolves faster (2s), it still has to wait until p1 finishes.
// Because execution is sequential.
//  To run them in parallel, use Promise.all:

// async function runParallel() {
//   const [res1, res2] = await Promise.all([p1, p2]);
//   console.log(res1, res2);
// }
//====================================================================

// // Example 1: Using .then
// const p = new Promise(resolve => {
//   setTimeout(() => resolve("Done!"), 2000);
// });

// function withThen() {
//   console.log("Before .then");
//   p.then(res => console.log("Inside .then:", res));
//   console.log("After .then");
// }

// withThen();


//  Output:

// Before .then
// After .then
// Inside .then: Done!   (after 2 seconds)


// Why?

// .then registers a callback for the promise.

// Execution does not pause at .then.

// JS moves to "After .then" immediately.

// When the promise resolves later (after 2s), the callback runs.

//  Example 2: Using await
// const p = new Promise(resolve => {
//   setTimeout(() => resolve("Done!"), 2000);
// });

// async function withAwait() {
//   console.log("Before await");
//   const res = await p; // suspends here until resolved
//   console.log("After await:", res);
// }

// withAwait();


// Output:

// Before await
// (2 second pause)
// After await: Done!


//  Why?

// await pauses the async function until the promise resolves.

// That’s why "After await" doesn’t print immediately.

// It looks synchronous → as if JS is waiting at that line.

// Key Difference Explained Simply

// .then → doesn’t wait. Code after .then runs immediately. The promise result comes later in a callback.

// await → pauses function execution. Code after await only runs after the promise resolves.


// Promise + .then → callback goes to microtask queue. Function doesn’t pause. Other code continues, callback runs later.

// Async/await → is just syntactic sugar on top of promises. But here, the async function’s execution is suspended until the promise resolves, so your code looks synchronous.

//  Analogy

// .then:
// “Hey promise, when you’re done, call me later. Meanwhile, I’ll keep working.”

// await:
// “I’ll stop working here, wait until you’re done, then continue.”

// Both are async — but .then expresses it in a callback style, while await expresses it in a sequential style.

//  Summary

// Promises are async because .then callbacks always run later (in microtask queue).

// Async/await just pauses function execution until the promise resolves, making it look synchronous.

// Behind the scenes → both are the same: async/await is built on top of promises.



// | **Feature**        | **.then**                               | **async/await**                          |
// | ------------------ | --------------------------------------- | ---------------------------------------- |
// | **Readability**    | Callback style (can get nested/chained) | Sequential style (looks synchronous)     |
// | **Execution flow** | Doesn’t wait, continues immediately     | Pauses at `await` until promise resolves |
// | **Error handling** | `.catch()`                              | `try...catch`                            |
// | **Use case**       | Quick one-off results                   | Complex async logic, better readability  |

// ---


