// 1. Function Statement (aka Function Declaration)

function a(){
    console.log("hello")
}
a() // hello

//==================================
a(); // "Hello A" 
b(); // TypeError  // b is not a function

function a() {
  console.log("Hello A");
}

var b = function () {
  console.log("Hello B");
};
// or a: Function declaration is hoisted, so the function exists before the code runs.

// For b: It’s a function expression, stored as a variable. var b is hoisted only as undefined, not as a function. So calling b() before assignment throws an error.

//=======================================
//A function expression is when you assign a function to a variable.

let b = function(){
    console.log("hi")
}
b()// hi

// Function Declaration vs	Function Expression
// Hoisted with function body
// Hoisted as undefined
//   Can be called before definition	Cannot be called before definition

//======================================================
//A function without a name.

// function () { } //  SyntaxError


// Why ?
// Because function declarations require a name. But anonymous functions can be used in expressions.
//==============================================================

var b = function () {
  console.log("Hello");
};
b(); // Hello

//====================================================

// Parameters vs Arguments

// Parameters: placeholders in function definition.

// Arguments: actual values passed when calling the function.
var b = function (param1, param2) { // param1, param2 = parameters
  console.log(param1, param2);
};
b("arg1", "arg2"); // "arg1" and "arg2" are arguments
//================================================================
var b = function xyz() {
  console.log("b called");
};
b(); // "b called"
xyz(); // ReferenceError
// Why?
// xyz exists only inside the function itself for recursion or debugging. It’s not available globally.

//callback
function greet(callback){
    console.log("kuki")
    callback()
}
greet(function(){
    console.log("baby")
})
//Here greet takes another function as an argument — this is the power of first-class functions.
//==========================================================
var b = function (param1) {
  console.log(param1);
};

b(function () {
  console.log("Hello from passed function");
});
// Here you did pass param1 → it’s the function function () { console.log("Hello from passed function"); }.
// But inside b, you only did console.log(param1) → so JavaScript prints the function definition (the code itself), not its execution.

//Callback version:
var b = function (param1) {
  param1(); // invoke it
};

b(function () {
  console.log("Hello from passed function");
});
// //Now, inside b, we are executing param1.
// So instead of logging the function code, JavaScript actually runs it → giving:

foo(); // Works
bar(); //  Error: bar is not a function

function foo() {
  console.log("Hello Foo");
}

var bar = function () {
  console.log("Hello Bar");
};

bar(); //  Works now


//=========================================================
// Storing Functions in Variables

var greet = function(){
    console.log("hi")
}

greet()// hi
// Here, greet is a variable holding a function.

// Just like a number (var x = 10;), but instead of a number, the value is a function.

// This is called a function expression.

//===============================================
//Passing Functions as Arguments

var b = function (param1) {
  console.log(param1);
};

b(function () {
  console.log("Hello from passed function");
});

// here We passed an anonymous function as param1.

// But inside b, we just console.log(param1) → so it prints the function definition itself, not the result.

// Step by step:

// You call b(...) and pass a function as param1.

// So inside b,
// param1 = function () { console.log("Hello from passed function"); }

// Inside b, you do:

// console.log(param1);


// That does not call param1.
// It just logs the function object itself.

// Therefore, the output you see in the console is something like:

// ƒ () {
//   console.log("Hello from passed function");
// }


// or, in Node.js, it might look like:

// [Function (anonymous)]

// Why "Hello from passed function" is not printed:

// Because that message only appears if you execute the function by writing:

// param1(); // call it


// But in your code, you only logged the function reference, not executed it.

// If we actually want to call the passed function (turning it into a callback):
var b = function (param1) {
  param1(); // invoking the passed function
};

b(function () {
  console.log("Hello from passed function");
});
//output: Hello from passed function

//=======================================================
//Returning Functions (Higher-Order Functions)
var b = function () {
  return function () {
    console.log("Hello from returned function");
  };
};

var returnedFunc = b();   // b returns a function
returnedFunc();           // "Hello from returned function"

// What’s happening here?

// b is a function.

// When you call b(), it executes and returns another function (not a value, but a whole function itself).

// var returnedFunc = b(); → now returnedFunc is holding the returned function.

// Calling returnedFunc(); executes that returned function, logging "Hello from returned function".

//  If you want, you can chain calls directly:

// b()(); 


// b() → gives back the inner function.

// () → executes that inner function.

// This is called a Higher-Order Function (HOF) because it returns another function

//==================================================
// Functional Programming

// Because functions can be passed around, we get powerful array methods like map, filter, reduce.

let nums = [1, 2, 3, 4];

let squared = nums.map(function (n) {
  return n * n;
});

//or - using arrow function
//let squared = nums.map(n => n * n);


console.log(squared); // [1, 4, 9, 16]

// =====================================================
//  Dynamic Behavior

// Functions can make other functions flexible & reusable:
function calculate(a, b, operation) {
  return operation(a, b);
}

console.log(calculate(5, 3, function (x, y) { return x + y; })); // 8
console.log(calculate(5, 3, function (x, y) { return x * y; })); // 15

// calculate is a higher-order function because it takes another function (operation) as an argument.

// Parameters:

// a → first number

// b → second number

// operation → a function that defines what to do with a and b

// Inside calculate, it simply does:

// return operation(a, b);


// This means: "Whatever function you pass as operation, call it with a and b."

// Step 2: First Call (Addition)
// console.log(calculate(5, 3, function (x, y) { return x + y; }));


// Here, we call calculate with:

// a = 5

// b = 3

// operation = function (x, y) { return x + y; } (an anonymous function)

// Now inside calculate:

// operation(5, 3) → function(x, y) { return x + y; }(5, 3)


// This executes the anonymous function:

// x = 5, y = 3

// return x + y → return 8

// So, calculate returns 8.
// console.log prints:

// 8
//  Step 3: Second Call (Multiplication)
// console.log(calculate(5, 3, function (x, y) { return x * y; }));


// Here, operation is a different function:

// function (x, y) { return x * y; }


// Inside calculate:

// operation(5, 3) → function(x, y) { return x * y; }(5, 3)


// Substitution:
// 5 * 3 = 15

// So, calculate returns 15.
// console.log prints:

// 15

// Why Is This Powerful?

// calculate does not know what operation will be used.

// You can inject behavior dynamically by passing different functions.

// The same calculate function works for addition, multiplication, subtraction, division, or even custom formulas without rewriting it.

// calculate = reusable “engine”

// operation = custom “logic” (you decide what math to perform)
