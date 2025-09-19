const p6  = new Promise((resolve, reject) =>{
  setTimeout(() =>{
    resolve("smitu resolved")
  }, 3000)
})

async function getData6() {
  console.log("smitu chiku") // (1)
  const res = await p6;      // waits 3s
  console.log(res);          // (3)
  console.log('Hello There!'); // (4)
}
getData6();

async function handlePromise() { 
  console.log('Hi');           // (2)
  const val = await p6;        // already same promise
  console.log('Hello There!'); // (5)
  console.log(val);            // (6)

  const val2 = await p6;       // re-await same resolved promise
  console.log('Hello There! 2'); // (7)
  console.log(val2);             // (8)
}
handlePromise();

// ### Timeline

// **Immediately when functions start:**

// ```
// smitu chiku   // from getData6
// Hi            // from handlePromise
// ```

// Both functions hit `await p6`, and now they pause.

// ---

// **After 3 seconds, `p6` resolves → "smitu resolved".**
// At that moment:

// * `getData6` continues from its `await`.
// * `handlePromise` continues from its first `await`.

// So the outputs after 3s:

// ```
// smitu resolved      // from getData6
// Hello There!        // from getData6
// Hello There!        // from handlePromise
// smitu resolved      // from handlePromise
// ```

// ---

// **Next: handlePromise hits second `await p6`.**
// But `p6` is already resolved, so it does **not wait again** — it continues immediately.

// So:

// ```
// Hello There! 2
// smitu resolved
// ```

// ---

// ###  Final Output (in order)

// ```
// smitu chiku
// Hi
// smitu resolved
// Hello There!
// Hello There!
// smitu resolved
// Hello There! 2
// smitu resolved
// ```

// ---

//  Key takeaway:

// * The **first await** waits 3 seconds because the promise wasn’t resolved yet.
// * The **second await** doesn’t wait again — it instantly gives the resolved value.

