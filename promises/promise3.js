// Promise.all([p1,p2,p3])

// Promise.allSettled([p1,p2,p3])

// Promise.race([p1,p2,p3])

// Promise.any([p1,p2,p3])

const p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        reject("p1 sucess")
    }, 3000)
})

const p2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        reject("p2 resolve")
    }, 1000)
})

const p3 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
    reject("p3 resolve")
    }, 2000)
})

Promise.any([p1,p2,p3]).then((result) =>{
    console.log(result)
})
.catch(err => {
    console.log(err)
})


// #  The 4 Main Static Methods (Parallel Handling)


// ## 1**Promise.all()**

// * Waits for **all promises** to succeed.
// * If **one fails**, the entire thing fails immediately ("fail fast").
// * Best when you need *all results together* (e.g., load user profile + posts + friends in parallel).

//  Example:

// ```js
// Promise.all([p1, p2, p3])
//   .then(results => console.log(results)) // [val1, val2, val3]
//   .catch(err => console.error(err));     // First error stops everything
// ```
//  Time taken = longest promise.
//  If any promise rejects → **whole thing rejects immediately**.

// ---

// ## 2️ **Promise.allSettled()**

// * Waits for **all promises**, whether they succeed or fail.
// * Returns array with **status** for each (`fulfilled` or `rejected`).

//  Example:

// ```js
// Promise.allSettled([p1, p2, p3]).then(results => console.log(results));
// /*
// [
//   {status: "fulfilled", value: "P1 Success"},
//   {status: "rejected", reason: "P2 Fail"},
//   {status: "fulfilled", value: "P3 Success"}
// ]
// */
// ```

//  Time taken = longest promise.
//  Safest: you never lose results, even if some failed.

//  Use when: You want **all results (success + failure)** for logging, analytics, batch processing.

// ---

// ##  **Promise.race()**

// * Whichever settles **first** (success or failure), wins the race.
// * Immediately returns that result.

// Example:

// ```js
// Promise.race([p1, p2, p3])
//   .then(val => console.log(val))
//   .catch(err => console.error(err));
// ```

// * If **first one resolves** → returns its value.
// * If **first one rejects** → error comes immediately.

//  Use when: You only care about the **fastest response** (e.g., multiple servers, first API to reply wins).

// ---

// ## 4️ **Promise.any()**

// * Waits for the **first success**.
// * Ignores failures until all are rejected.
// * If **all reject**, throws `AggregateError`.

//  Example:

// ```js
// Promise.any([p1, p2, p3])
//   .then(val => console.log(val)) // First success
//   .catch(err => console.error(err.errors)); // All failed
// ```

//  Use when: You just need **at least one success**, don’t care about failures (e.g., backup servers – as long as one responds, you’re fine).

// ---

// #  Differences at a Glance

// | API              | Waits For     | Rejects Immediately? | Returns                           |
// | ---------------- | ------------- | -------------------- | --------------------------------- |
// | **all()**        | All success   | Yes (fail fast)      | Array of values                   |
// | **allSettled()** | All settle    | No                   | Array of `{status, value/reason}` |
// | **race()**       | First settle  | Yes                  | First result or error             |
// | **any()**        | First success | Only if all fail     | First success or `AggregateError` |

// ---

// #  Interview Questions

// 1. **Q: What is the difference between `Promise.all` and `Promise.allSettled`?**
//     `all` → stops at first failure.
//     `allSettled` → waits for all, gives both success & failure.

// 2. **Q: Which one would you use for parallel API calls where at least 1 result is enough?**
//     `Promise.any`.

// 3. **Q: Which one is best for fallback or redundancy (e.g., multiple servers)?**
//     `Promise.race` (fastest response wins).

// 4. **Q: Why is `Promise.allSettled` considered "safest"?**
//     Because it never fails entirely, always returns an array.

// ---

// #  Don’t Forget 2 More Static Methods

// * **Promise.resolve(val)** → Creates an already-resolved promise.
// * **Promise.reject(err)** → Creates an already-rejected promise.

// ---

// #  Real-World Examples

// * `Promise.all()` → Load user profile, posts, notifications in one go. If one fails, you probably don’t want to render.
// * `Promise.allSettled()` → Run 10 batch jobs, collect which succeeded and which failed.
// * `Promise.race()` → Ping 3 mirrors of a server, whichever replies first is used.
// * `Promise.any()` → Query multiple APIs, only need one successful response.

// So now:

// * `all()` = *All or Nothing*.
// * `allSettled()` = *Tell me everything (success + fail)*.
// * `race()` = *Fastest wins (success or fail)*.
// * `any()` = *First success wins*.

