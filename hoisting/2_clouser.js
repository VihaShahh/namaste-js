function x(){
    for(var i=0;i<5;i++){
        setTimeout(function(){
            console.log(i)
        }, i*1000)
    }
    console.log("js")
}
x();

// Loop starts with i = 1, 2, 3, 4, 5.

// Each time → setTimeout registers a callback to print i after some time (i*1000).

// At i=1 → prints after 1s.

// At i=2 → prints after 2s.

// ... up to i=5.

// But here’s the trap: var is function-scoped.

// This means only one i exists for the whole loop, not separate copies.

// The callback doesn’t store the value of i, it stores the reference of i.

// When event loop later executes the callbacks, the loop is already finished.

// At the end of loop, i = 6.

// //==================

function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste Javascript");
}
x();
// let is block-scoped.

// For every iteration of the loop, JS creates a new variable i (a fresh copy).

// Each callback closure captures its own i.

// So after 1s → prints 1, after 2s → prints 2, … till 5.


// One single i for the whole loop.

// After loop ends → i = 6.

// All callbacks use the same i.

// That’s why output = 6 6 6 6 6.
//===========================
// The Fix with var using a Helper Function (Closure)

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {   //  this "captures" i as a parameter
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);   // 👈 call close with current i (creates fresh copy each time)
  }
  console.log("Namaste Javascript");
}
x();
// Each time close(i) is called, JS creates a new execution context for close.

// The parameter i of close is a new variable (not the same i from loop).

// The callback inside setTimeout forms a closure around that new variable.

// Hence, after 1s → prints 1, after 2s → prints 2, … till 5.

// Namaste Javascript
// 1
// 2
// 3
// 4
// 5


// here The loop still runs from 1 → 5 and breaks when i = 6.

// But here’s the key:

// For each iteration, JS engine creates a new binding of i (a fresh memory cell).

// Each callback closes over its own copy of i.

// So effectively, it behaves like:

// {
//   let i = 1; setTimeout(() => console.log(i), 1000);
// }
// {
//   let i = 2; setTimeout(() => console.log(i), 2000);
// }
// {
//   let i = 3; setTimeout(() => console.log(i), 3000);
// }
// {
//   let i = 4; setTimeout(() => console.log(i), 4000);
// }
// {
//   let i = 5; setTimeout(() => console.log(i), 5000);
// }

//==============================
// var → one shared variable (function scope). All callbacks print last value.

// let → new variable for each iteration (block scope). Works as expected.

// If forced to use var → create a helper function and pass i as argument. This ensures each callback gets its own copy of i.