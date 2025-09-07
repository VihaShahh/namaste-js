//============================================================================
//for... in loop

let student = {
    name: "smitu",
    age: 21,
}

for(let key in student){
    console.log(key, student[key])
}
// name smitu
// age 21
//for...in = for objects → iterates keys.

// To get the value, you must use bracket notation student[key] (not student.key, because that would only look for a property literally named "key").\
let arr1 = ["Apple", "Banana", "Cherry"];
arr1.extra = "Mango";

for (let index in arr1) {
  console.log(index, ":", arr1[index]);
}
// //0 : Apple
// 1 : Banana
// 2 : Cherry
// extra : Mango   (unexpected!)
//That’s why for...in is not safe for arrays.

//=============================================

let arr = [10,20,30]
for( let index in arr)
{
    console.log(index, arr[index])
}
//0 10
//1 20
//2 30
//Issue Even though the syntax works, for...in is not recommended for arrays and Order is not guaranteed & It’s meant for objects.

//for...of loop
for(let val of arr){
    console.log(val)
}
//10
//20
//30

//with strings
let str = "kuku"
for(let i of str){
    console.log(i) // k u k u
}

let map = new Map([
    ["name", "smitu"],
    ["age", 21]
])

for(let [key, val] of map){
    console.log(key, val)
}
// name smitu
// age 21

let map1 = new Map();

map1.set("hobby", ["Reading", "Dancing", "Singing"]);
map1.set("marks", { math: 90, science: 85 });

for (let [key, value] of map1) {
  console.log(key, ":", value);
}

//forEach loop
//syntax
//array.forEach(function(currentValue,index,array){
//code
//})

//using arrow function
Array.forEach((currentValue, index, array) =>{
    //code
})
//========================================
let fruits = ["app", "banana", "cherry"];
fruits.forEach((num) => console.log(num))
//app
//banana
//cherry // here as per syntax num is currentValue

let numbers = [1,2,3]
numbers.forEach((no, index) => console.log(index, no))
//0 1
//1 2
//2 3
//here no is currentValue and index is index

//Accessing the original array

let nums = [10,2,4]
nums.forEach((no, index, arr) =>{
    arr[index] = no * 2 // modify the original array
})
console.log(nums)// [20,4,8]

//array of objects
let students =
[
{name: "mysitu", age: 21},
{name: "kuku", age: 22}
]
students.forEach((s) =>console.log(s.name, s.age))
//mysmitu 21
//kuku 22
//here students is an array of objects

// Each iteration passes one object as student

// We access the properties of the object using dot notation: student.name, student.age

//======================================

//Nested arrays example (matrix)

let matrix = [
    [1,2], [3,4]
]
matrix.forEach(row =>{
    row.forEach(no => console.log(no))
})
//1
//2
//3
//4

// in map each key can only map to one value.
//if you add multiple values to the same key it will overwrite the previous one.

let mapp = new Map()
mapp.set("hobby", "reading")
mapp.set("hobby", "dancing")//overwrites reading
mapp.set("hobby" , "singing")//overwrites dancing
console.log(mapp) 

//Map(1) { 'hobby' => 'Singing' }//here only one key 'hobby' with value 'singing'Map(1) — meaning “a Map with 1 entry.”
//=========================================
// if you want multiple values for one key you can store them inside array or object as the value.

let mapp1 = new Map()
mapp1.set("hobby", ["reading", "dancing", "singing"])
mapp1.set("marks", {math:90, science:85})

for(let [key, value] of mapp1){
    console.log(key, value)
}
//hobby : [ 'Reading', 'Dancing', 'Singing' ]
//marks : { math: 90, science: 85 }

// So here:

// "hobby" → key

// ["Reading", "Dancing", "Singing"] → value (array)

// "marks" → key

// { math: 90, science: 85 } → value (object)