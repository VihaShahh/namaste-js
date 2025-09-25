function outer() {
  var a = 10;
  function inner() {
    console.log(a); // inner remembers 'a'
  }
  return inner;
}
outer()(); // 10

// Here, Step 1: What happens when you call outer()?

// outer() runs.

// Inside it, a = 10 is created.

// outer returns the function inner, not its result.

// So:

// let x = outer();
// console.log(x); 
// // logs the code of inner: function inner() { console.log(a); }


// Now x is basically the function inner.

// Step 2: Why outer()(); ?

// First () → calls outer, which returns inner.

// Second () → calls the returned function inner.

// Step 3: What if you just write outer()?
// outer(); 


//  This only executes outer, which returns inner.
// But since you don’t call that returned function, nothing is logged.

//  In short:

// outer() → gives you the inner function.
// outer()(); → first gets inner, then calls it immediately.

//or this could also work but//

function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  inner(); // directly calling
}

outer(); // 10
// Here, outer itself calls inner.

// You cannot reuse inner outside outer anymore, because it’s not returned.

// Every time you call outer(), it will run inner immediately.

//summary
// Return inner → useful when you want closures, encapsulation, reusability (e.g., counters, currying, memoization).

// Call inner inside outer → useful when you only need inner once and don’t care about reusing it.

//==============================================

function outer() {
  function inner() {
    console.log(a); // ??
  }
  var a = 10;
  return inner;
}
outer()(); // 10

// here When JavaScript reads your code, before running it, it does a preparation step:

// All function declarations are moved (hoisted) to the top of their scope.

// All var declarations are also moved to the top (but not their values, only the declaration).

// How JS sees your function after hoisting
// function outer() {
//   var a;              //  declaration moved up
//   function inner() {  //  function also moved up
//     console.log(a);
//   }
//   a = 10;             // assignment stays in place
//   return inner;
// }

// Step-by-step execution:

// outer() is called.
// → a is created (initialized as undefined).
// → inner is created.

// Inside outer, code runs top to bottom:

// a = 10

// return inner

// Later, when inner() runs, it logs a.
// By that time, a = 10.

// Key point:

// Even though var a is written after inner in the code, JS already knows that a exists (because of hoisting).
// That’s why inner doesn’t throw ReferenceError.
// It just waits until runtime to check the current value of a → which is 10.

//same with let and const

function outer() {
  function inner() {
    console.log(a);
  }
  let a = 10;
  return inner;
}
outer()(); // ReferenceError

// here what happens here:

// With let, hoisting still happens, but differently:

// The variable name a is known to JS in advance.

// But it is in a “Temporal Dead Zone” (TDZ) from the start of the scope until the let statement runs.

// That means inner() runs before a is assigned → TDZ triggers a ReferenceError.

// function outer() {
//   let a; // hoisted but not initialized
//   function inner() {
//     console.log(a); //  TDZ error if accessed before assignment
//   }
//   a = 10;
//   return inner;
// }
