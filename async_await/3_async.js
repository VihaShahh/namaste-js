const p6  = new Promise((resolve, reject) =>{
  setTimeout(() =>{
    resolve("smitu resolved")
  }, 3000)
})
const p7  = new Promise((resolve, reject) =>{
  setTimeout(() =>{
    resolve("smitu resolved")
  }, 9000)
})

async function handlePromise() { 
  console.log('Hi');           // (1)
  const val = await p6;        // waits 3s
  console.log('Hello There!'); // (3)
  console.log(val);            // (4)

  const val2 = await p7;       // waits 6s more (total 9s from start)
  console.log('Hello There! 2'); // (6)
  console.log(val2);             // (7)
}
handlePromise();

// ### Step by Step Execution

// 1. **Immediately:**

// ```
// Hi
// ```

// * `console.log('Hi')` runs immediately.
// * `await p6` pauses the function until `p6` resolves.

// ---

// 2. **After 3 seconds:** (`p6` resolves)

// ```
// Hello There!
// smitu resolved
// ```

// * `val = await p6` now has the value `"smitu resolved"`.
// * The next two `console.log`s execute immediately.

// ---

// 3. **After 9 seconds total:** (`p7` resolves, 6s after `p6`)

// ```
// Hello There! 2
// smitu resolved
// ```

// * `val2 = await p7` now has the value `"smitu resolved"`.
// * The final two `console.log`s execute immediately.

// ---

// ###  Full Output with approximate timing

// ```
// Hi                  // immediately
// (wait 3s)
// Hello There!        // after 3s
// smitu resolved      // after 3s
// (wait 6s)
// Hello There! 2      // after 9s total
// smitu resolved      // after 9s total
// ```

// ---

// ###  Key Takeaways

// 1. `await` **pauses the async function**, not the whole program. Other JS code can continue.
// 2. Each `await` **waits independently** for its promise to resolve.
// 3. Total wait time = sum of individual waits if promises are awaited sequentially.

