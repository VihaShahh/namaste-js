// Function Declaration (Named function)
function greet(name){
    return `hello ${name}`
    //return "hello" + name;
}

// Function Expression
const greetexp = function(name){
    return name;
}
console.log(greetexp("smitu baby"))

const greetArrow = (name) => {
    return name
}

//or

const greetArroe1 = (name) => "hi" + name;

const chiku = name => name;

const smitu = (a,b) => a+b;

//==============================================
//Return vs No Return
function say(){
    console.log("hi")
}// returns undefined

function say1(){
    return 'hi'
}

//===================================================================
//hoisting - in function declarations, the entire function is hoisted to the top of its scope before  the code runs
// means you can call the function before its written in the code
function greet(){
    console.log("smitu ni chiku baby")
}

sayHello() // hoisted 
function sayHello(){
    console.log("hello")
}
//=========================================

//this

function showThis(){
    console.log(this)
}
showThis()//// Browser non-strict: Window | Strict/Modules/Node: undefined

const obj ={
    name: "kukubaby",
    fn: showThis
}
obj.fn()//output: {name: "viha", fn: [function]}

//obj.fn() called as a method:
// “object before the dot” rule ⇒ this === obj.

//================================

const obj1 = {
 name: "smitu",
 greet : function(){
    console.log(this.name)
 }
}
obj1.greet()// smitu
//======================================
//arrow function

const greet = () => console.log("hi")

greet();                      //  ReferenceError (TDZ)
const greet = () => console.log("Hello");

greet();                      //TypeError: greet is not a function
var greet = () => {};
//=======================================
const objj = {
    name : "smitu",
    greet: ()=> {console.log(this.name)
}
}
objj.greet()// undefined 
//here When you define an object literal ({}), it does not create a new this context.

// this inside fn is determined at the moment the arrow is created, not when it’s called.

// Since fn is an arrow function, it doesn’t bind its own this. Instead, it lexically inherits this from the surrounding scope where the object is being created.

// The surrounding scope here is the global/module scope (not obj).

// In strict mode, global this is undefined.

// So, this.name → undefined.
// That’s why you get undefined.
//==========================================
//function declaraion vs function expression vs arrow function
function showThis() {
  console.log(this);
}

showThis(); 
// Browser: Window (global object)

const obj2 = { fn: showThis };
obj2.fn();  
// obj — because called as a method of obj

//2
function showThis() {
  console.log(this);
}

showThis(); 
// Browser: Window (global object)

const obj4 = { fn: showThis };
obj4.fn();  
// obj — because called as a method of obj

//3
const showThis = () => {
  console.log(this);
};

showThis(); // Global object (Window in browser)

const obj5 = { fn: showThis };
obj5.fn(); // Still Window, NOT obj
// showThis was created in the global scope.

// It remembers the this from global scope forever.

// It does not care who calls it.

//4-Arrow function inside a normal function

const obj7 = {
  name: "Viha",
  greet: function() {
    const arrow = () => console.log(this.name);
    arrow();
  }
};

obj7.greet(); // "Viha"
//Here, the arrow is inside a normal function that was called as obj.fn().

// The normal function’s this is obj, and the arrow captures that.================================================
//constructor

// Arrow functions are not constructors. Using new with an arrow function throws a TypeError (e.g. TypeError: Person is not a constructor).

// Regular function declarations/expressions and classes are constructors — they create a new object, bind this to that object, and set up the prototype chain.

const person = (name) =>{
    this.name = name;
}
const p = new person("msitu")//typerror person is not constructor
//because engines throw because arrow functions do not implement the internal [[Construct]] behavior that new requires

function Person(name) {
  this.name = name;          // 'this' becomes the new object created by `new`
}
const p1 = new Person("Viha");
console.log(p1.name); // "Viha"

// When you use new:

// JavaScript creates a new empty object.

// Sets this to that new object.

// Runs your function.

//=========================================
const obj10 = {
  a: 10,
  x: function() {
    console.log(this);
  }
};

obj10.x(); // call 1 { a: 10, x: [Function: x] }

x();     // call 2 (will error if x not defined globally)
