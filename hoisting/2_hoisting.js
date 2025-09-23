var x = 1;
a();
b(); 
console.log(x); // 3? (we’ll check)

function a() {
  var x = 10; 
  console.log(x); // 1?
}

function b() {
  var x = 100;
  console.log(x); // 2?
}
//10
// 100
// 1

// Step 1: Global Execution Context (GEC) is created

// Two phases happen here:

// Memory Creation Phase

// x → undefined

// a → entire function code

// b → entire function code

//  Execution Phase

// x = 1 → now in memory: x → 1

// Encounter a(); → so new Execution Context for a is created.

// Step 2: Calling a()

// When a() is invoked:

// A new execution context for a is pushed on the call stack.

// Inside function a:

// Memory phase of a():

// x → undefined (this is a new local x, not the global one!)

// Execution phase of a():

// x = 10

// console.log(x) → prints 10

// Now function a() finishes → its execution context is popped off the call stack.

// Step 3: Calling b()

// Same process again.

// Memory phase of b():

// x → undefined (another local x, separate from global and from a)

// Execution phase of b():

// x = 100

// console.log(x) → prints 100

// b() finishes → execution context is popped.

// Step 4: Back to Global Context

// Now the only thing left is:

// console.log(x);


// Remember:

// Global x = 1 (because local x in a and b never affected it).

// So this prints:

// 1

//  Final Output
// 10
// 100
// 1

//  Key Understandings

// Every function call creates a new Execution Context.
// That’s why the x inside a and b are completely different from global x.

// Local variables shadow global variables → if you declare var x inside a function, that function’s x is used.

// Call Stack tracks execution:

// Call Stack while running a():
// [GEC, a()]
// then back to [GEC]

// Call Stack while running b():
// [GEC, b()]
// then back to [GEC]


// Once everything is done → GEC is removed → program ends.