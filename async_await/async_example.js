async function real(){
    try{
    console.log("start")
  const data = await fetch("https://api.github.com/users/VihaShahh")
  console.log(data)
  const jsonValue = await data.json()
  console.log(jsonValue)
    }catch(err){
        console.log("error", err)
    }// error handling
}

real()

// Other way of handling error:
handlePromise().catch(err => console.log(err)); // this will work as handlePromise will return error promise in case of failure.

//explaination:
// JS sends network request (non-blocking).

// While waiting, event loop continues running other tasks.

// Server responds → fetch resolves → Response object comes back.

// You log the Response.

// You call .json() → reads + parses response body → resolves with actual JSON.

// You log the JSON object.

async function greet(){
    return "hello"
}
greet().then(res => console.log(res))
//is equivalent to Promise.resolve("hello")//so actually // -> Promise { "hello" }
// When the promise resolves, it carries the value "hello".

// .then(res => …) gives you that resolved value (res = "hello").

// So console.log(res) prints:

// hello
//======================

async function herry(){
    let delhiWeather = new Promise((resolve) =>
    {
        setTimeout(() =>{
            resolve("27 degree")
        }, 2000)
    })

    let bangalorWeather = new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("21 degree")
        }, 7000)
    })

    let delhiW = await delhiWeather;
    let banw = await bangalorWeather;
    return [delhiW, banw]
}

herry().then(val => console.log(val))
//=====================================

// 5. Sequential vs Parallel Execution
// Sequential (one by one):
async function sequentially(){
    const a = await fetch("")
    const b = await fetch("")
}
sequentially()

//Parallel (faster with Promise.all):

async function parellel() {
    const [a,b] = await Promise.all([fetch(""), fetch("")])
    console.log(a,b)
}
parellel()

//=============================

//loops with async await

async function processNumber(no){
    for(let i of no){
        await new Promise(resolve =>setTimeout(resolve, 1000))
    }
}
processNumber([1,2,3,46])
//resolve => setTimeout(resolve, 1000)

// Here you are using arrow function syntax.

// resolve is a function provided by JavaScript to fulfill the Promise.

// setTimeout(resolve, 1000) means:
// “After 1000 ms (1 second), call resolve().”

// here processNumber(1234);
// then no would be just a number, not iterable, and your code

// js
// Copy code
// for (let i of no)
// would throw an error → TypeError: no is not iterable.

// Confirming with code
// js
// Copy code
// console.log(Array.isArray([1,2,3,46])); // true