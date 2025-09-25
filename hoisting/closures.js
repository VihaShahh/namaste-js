function x(){
    let a = 10;
    function y(){
        console.log(a)
    }
    return y;
}

let z = x();
console.log("z", z)
z();

// JS engine scans the code.

// function x is created and stored in memory.

// Nothing executes yet.

// let z = x();

// Calls the function x.

// Inside x:

// A variable a is created with value 10.

// A function y is created (which remembers its outer scope).

// x then returns y.

// So now, z holds a reference to function y, along with its lexical scope (closure).

// console.log("z", z) → why do we see the code of y?
// let z = x();
// console.log("z", z);


// After calling x(), the return value is y (the function itself).

// So z now stores a function.

// In JavaScript, when you try to print a function, it shows its function definition (code).
//  That’s why you see:

// z ƒ y() {
//     console.log(a);
// }


// It’s JavaScript’s way of showing:
// “Hey, z is a function called y, and here’s its body.”

//  Why does z(); → print 10?
// z(); // means call the function y()


// Now you’re actually executing the function stored inside z.

// y’s body is:

// function y() {
//   console.log(a);
// }


// When JS runs console.log(a), it looks for a:

// Inside y → not found.

// So it checks y’s lexical scope (where y was created → inside x).

// In x, we had: let a = 10;

// That’s why it prints:

// 10
//  Difference

// console.log(z) → just shows you what z is (a function → so it prints its code).

// z() → actually runs the function stored in z, so the code inside executes.

// Think of it like this analogy:

// console.log(z) → you are looking at the recipe (the function code).

// z() → you are cooking the dish (executing the function).

function z() {
  let b = 10;          // in z's scope

  function y() {
    let a = 7;         // in y's scope

    function x() {
      console.log(a, b); // 👈 x can access both a (from y) and b (from z)
    }

    x();               // call x here
  }

  y();                 // call y here
}

z(); // Output: 7 10

//==========================================
function z() {
  let b = 10;          // in z's scope

  function y() {
    let a = 7;         // in y's scope

    function x() {
      console.log(a, b); // x can access both a (from y) and b (from z)
    }

    x();               // call x here
  }

  y();                 // call y here
}

z(); // Output: 7 10

//===============================================
function x(){
    var a = 10;
    setTimeout(function(){
        console.log(a)
    }, 3000)
    console.log("Namaste Javascript")
}
x();

// x() is called.

// Inside x, var i = 1 is created.

// setTimeout is called → JS engine registers the callback function somewhere in its Web APIs environment (not in call stack). It also sets a timer of 3000ms.

// Next line runs immediately → "Namaste Javascript" is printed.

// After 3 seconds → Event loop pushes the callback into call stack → callback executes → console.log(i) prints 1.

// Namaste Javascript
// 1 (after 3s)
//======================================================

