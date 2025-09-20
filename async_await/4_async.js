const p6  = new Promise(resolve => setTimeout(() => resolve("smitu resolved"), 9000));
const p7  = new Promise(resolve => setTimeout(() => resolve("smitu resolved"), 3000));

async function handlePromise() {
  console.log("Hi");
  const val = await p6;       // waits 9s
  console.log("Hello There!");
  console.log(val);
  const val2 = await p7;      // already resolved after 3s → returns immediately
  console.log("Hello There! 2");
  console.log(val2);
}
handlePromise();

//output:
// Hi                 // immediately
// (wait 9s)
// Hello There!       // after 9s
// smitu resolved     // after 9s
// Hello There! 2     // immediately after
// smitu resolved     // immediately after

// Main Difference
// Aspect	Example 1 (p6=9s, p7=3s)	Example 2 (p6=3s, p7=9s)
// await p6	waits 9s	waits 3s
// await p7	returns immediately (already resolved)	waits 6s more (until total 9s)
// Total time for function	9s	9s
// Order of logs	Hi → p6 logs → p7 logs immediately	Hi → p6 logs → wait → p7 logs

// Case 1 (p6=9, p7=3):
// p7 resolves early, so by the time we await p7, it’s already done → immediate return.

// Case 2 (p6=3, p7=9):
// p7 is still pending when we reach its await, so we must wait until it finishes.