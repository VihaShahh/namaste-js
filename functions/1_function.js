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
