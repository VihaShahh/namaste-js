// What is a Higher-Order Function (HOF)?

//  A function in JavaScript is called a Higher-Order Function (HOF) if it does any one (or both) of these things:

// Takes another function as an argument.

// Returns another function as a value.

function x(){
    console.log("hii")
}

function y(callback){
    callback();
}
y(x) //hii

//or -----------------
// First way: good if you’ll reuse the function in multiple places.

// Second way: good for one-time use.
function y(callback)
{
    callback()

}
y( function x(){
    console.log("hii")
})

//==============================================

const rediusAtrr = [1,2,34,5]

const area =  r => Math.PI * r *r
// const area = function(r){
//     return Math.PI * r * r
// }
const circumference = r => 2 * Math.PI * r;
const diameter = r => 2 * r;

const calculate = function(rediusAtrr, operation ){
    const output = []
    for(let i=0; i< rediusAtrr.length; i++){
        output.push(operation(rediusAtrr[i]))
    }
    return output;
}
console.log(calculate(rediusAtrr, area))
console.log(calculate(radiusArr, circumference));
console.log(calculate(radiusArr, diameter));

// 1. Variables declared

// radiusArr = [1, 2, 3, 4]

// area, circumference, diameter → all are functions stored in variables.

// So memory has:

// radiusArr → [1, 2, 3, 4]
// area → function r => Math.PI * r * r
// circumference → function r => 2 * Math.PI * r
// diameter → function r => 2 * r
// calculate → function (takes array + function)

// 2. First call: calculate(radiusArr, area)

// radiusArr is [1, 2, 3, 4]

// operation = area (the function)

// Inside calculate:

// output = [] initially.

// Loop runs:

// i=0 → operation(radiusArr[0]) = area(1) = Math.PI * 1 * 1 = 3.14159...
// → output = [3.14]

// i=1 → area(2) = Math.PI * 2 * 2 = 12.566...
// → output = [3.14, 12.57]

// i=2 → area(3) = Math.PI * 9 = 28.274...
// → output = [3.14, 12.57, 28.27]

// i=3 → area(4) = Math.PI * 16 = 50.265...
// → output = [3.14, 12.57, 28.27, 50.27]

// Function returns → [3.14, 12.57, 28.27, 50.27].

// 3. Second call: calculate(radiusArr, circumference)

// operation = circumference

// Loop runs:

// circumference(1) = 2 * π * 1 = 6.28

// circumference(2) = 2 * π * 2 = 12.57

// circumference(3) = 18.85

// circumference(4) = 25.13

// Result → [6.28, 12.57, 18.85, 25.13].

// 4. Third call: calculate(radiusArr, diameter)

// operation = diameter

// Loop runs:

// diameter(1) = 2

// diameter(2) = 4

// diameter(3) = 6

// diameter(4) = 8

// Result → [2, 4, 6, 8].

//  Final Console Output:
// [ 3.14159..., 12.56637..., 28.27433..., 50.26548... ]
// [ 6.28318..., 12.56637..., 18.84955..., 25.13274... ]
// [ 2, 4, 6, 8 ]

//  What’s happening conceptually

// calculate is a Higher-Order Function because it takes another function (area, circumference, diameter) as an argument.

// The logic for each calculation is not inside calculate.

// calculate only knows “I’ll loop through the array and apply whatever function you give me”.

// The actual formula comes from the function you pass in.

// This makes calculate generic and reusable.

// here r is a parameter of these small functions.

// r is used inside these formulas (Math.PI * r * r, 2 * r, etc.).

// But you don’t directly see r in the call to calculate because calculate doesn’t care about the formula — it just calls the function you gave it.

// Let’s trace one example to see r in action:

// Call:

// console.log(calculate(radiusArr, area));


// Inside calculate:

// output.push(operation(radiusArr[i]));


// Now substitute values step by step:

// First iteration:

// radiusArr[0] = 1

// operation = area

// So: area(1) is called

// Inside area, the parameter r = 1

// Formula runs: Math.PI * r * r = Math.PI * 1 * 1 = 3.14

// See? Here r does get a value (1) during execution.

// Next iteration:

// area(2) → r = 2 → Math.PI * 2 * 2 = 12.57

// Next:

// area(3) → r = 3 → 28.27

// And so on.

// So r is very much used — but inside the functions you pass (area, circumference, diameter), not directly inside calculate.
//===================================================
// The calculate function you wrote is basically a polyfill of JavaScript’s built-in .map().

// console.log(radiusArr.map(area));
// console.log(radiusArr.map(circumference));


// These give the same result as calculate(radiusArr, area).