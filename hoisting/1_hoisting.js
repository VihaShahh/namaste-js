getName(); // Namaste JavaScript
//console.log(x); // ReferenceError: x is not defined.
//e

// getName → hoisted with its full function definition. 

// No x in memory → accessing x → ReferenceError.
console.log(getName); // f getName(){ console.log("Namaste JavaScript"); }

function getName() {
  console.log("Namaste JavaScript");
}

//=========================
getNme()
// tries to call undefined() → TypeError: getNme is not a function.
// (Program halts here, so console.log(getNme) never runs.)
console.log(getNme);
var getNme = function(){
    console.log("ho")
}
//var getName → hoisted but initialized as undefined.

///============================
// Example 5: Function Declarations hoist fully
hii()//hello
function hii(){
    console.log("hello")
}

//========================================================

//Function Expressions don’t
sayHello(); //  TypeError: sayHello is not a function

var sayHello = function() {
  console.log("Hello!");
};
console.log(sayHello) //undefined

//====================================
sayYo();

let sayYo = function() {
  console.log("Yo!");
};
//ReferenceError: Cannot access 'sayYo' before initialization

//=======================================
//Function Declaration Overwritten by var
function greet() {
  console.log("Hello from declaration!");
}

var greet = function() {
  console.log("Hello from expression!");
};

greet();

// ## Step 1: **Hoisting (Memory Creation Phase)**

// Before execution, JS does **two things**:

// 1. **Function Declaration** → fully hoisted **with its body**:

// ```
// greet → function greet() { console.log("Hello from declaration!"); }
// ```

// 2. **`var greet`** → declaration is hoisted **but only as a variable**, initialized as `undefined`.

// > Important: **Hoisting of `var greet` does not overwrite the function declaration yet.**

// Memory after creation phase:

// ```
// greet → function greet() { console.log("Hello from declaration!"); }
// ```

// ---

// ## Step 2: **Execution Phase**

// ### Line: `var greet = function() { console.log("Hello from expression!"); };`

// * Now JS executes the **assignment**.
// * The `greet` variable already exists in memory (from `var` + hoisted function declaration).
// * JS evaluates the **right-hand side** (`function() { ... }`) → creates a **new function object**.
// * JS then assigns this new function to the variable `greet`.

// Memory **before** assignment:

// ```
// greet → function greet() { console.log("Hello from declaration!"); }
// ```

// Memory **after** assignment:

// ```
// greet → function() { console.log("Hello from expression!"); }
// ```

//  **The function declaration is “replaced” because JS assigns a new value to the same variable `greet`.**

// ---

// ### Line: `greet();`

// * JS looks at the **current value** of `greet` → the **function expression**.
// * Executes it → prints:

// ```
// Hello from expression!
// ```

// ---

// ## Important Concept

// * **Function declarations are hoisted and exist first in memory.**
// * **Variable assignments (including function expressions) happen at execution time.**
// * If the variable name is the **same as a function declaration**, the assignment **overwrites the original function in memory**.

// ---

// ###  Analogy

// Think of `greet` as a **box**:

// 1. Hoisting: JS puts **function declaration** inside the box.

// ```
// [greet box] → function greet() { console.log("Hello from declaration!"); }
// ```

// 2. Execution: JS assigns a **new function** into the same box.

// ```
// [greet box] → function() { console.log("Hello from expression!"); }
// ```

// 3. Calling `greet()` → opens the box → executes the **latest function**.

//===============================================
function foo() {
  console.log("First foo");
}

function foo() {
  console.log("Second foo");
}

foo();


//==================================
function hello() {
  console.log("Hi!");
}

var hello;

hello(); 


// ## Step 1: **Memory Creation Phase (Hoisting)**

// JavaScript first scans the code and hoists **function declarations** and **var declarations**:

// 1. **Function declaration** `function hello() {...}` → fully hoisted **with body**:

// ```
// hello → function hello() { console.log("Hi!"); }
// ```

// 2. **`var hello`** → hoisted **as a variable**, initialized as `undefined`.

// > Important: **function declarations take precedence over var declarations during hoisting**.
// > The `var hello` declaration does not overwrite the function declaration here.

// So after hoisting, memory looks like:

// ```
// hello → function hello() { console.log("Hi!"); }
// ```

// ---

// ## Step 2: **Execution Phase**

// 1. `var hello;`

// * JS sees this line but it **does nothing** because `hello` already exists (from function declaration).
// * Memory remains:

// ```
// hello → function hello() { console.log("Hi!"); }
// ```

// 2. `hello();`

// * Calls the **current value of `hello`**, which is the function from the declaration.
// * Output:

// ```
// Hi!
// ```

// ---

// ### Key Points

// * **Function declarations are hoisted first**, with their body.
// * `var` declaration **does not overwrite an existing function** during creation phase.
// * So calling `hello()` still works — it uses the function declaration.

// ---

// ###  Analogy

// * Imagine a **box named `hello`**:

//   1. Function declaration → put function inside the box.
//   2. `var hello;` → box already exists, so nothing changes.
//   3. Call `hello()` → open the box → run the function.

