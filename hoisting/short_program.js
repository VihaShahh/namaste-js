var x = 10;
console.log(x); // 10
console.log(this.x); // 10
console.log(window.x); // 10

// The variable x is created in global memory.

// It also gets attached as a property of the global object (window).

//  But note:

// This only happens with var.

// Variables declared with let or const do not attach to window.

// let y = 20;
// console.log(y);        // 20
// console.log(window.y); // undefined

// Global Variables with let or const

// If you use let or const at the global level:

// let y = 20;
// const z = 30;


// y and z are created in global memory.

// BUT they do not get attached to the global object (window).

// Instead, they live in a special "Script Scope" (still global, but not properties of window).

// So:

// console.log(y);        // 20
// console.log(z);        // 30

// console.log(window.y); // undefined
// console.log(window.z); // undefined


//  That’s the difference — let and const are still global, but they don’t pollute the global object.

// Why this difference?

// var is function-scoped and was designed in older JS versions → so in global scope, it automatically attaches to window.

// let and const are block-scoped (introduced in ES6) → and to avoid bugs, they do not attach to window.


console.log(x); // undefined (memory reserved, but value not yet assigned)
var x = 25;
console.log(x); // 25
console.log(a); // ReferenceError: a is not defined

var a = 5;
a = true;
a = "hello";

//=============================
console.log(b); //  ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // 20
