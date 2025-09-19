async function viha() {
    return "namste"
}

const data = viha()
console.log(data)//Promise { 'namste' }

data.then((res) => console.log(res)) //1st  way to get the value

//or - 2nd way to get the value
async function via() {
 const res = await viha()
 console.log("r",res)
}
via()

// Even though you just return "namaste",
// the async keyword automatically wraps it in a Promise.
// So internally this is like:
// function getData() {
//   return Promise.resolve("namaste");
// }

// viha() is not returning the string.

// Because of the async keyword, it always returns a Promise.

// So what you’re logging is the Promise object, not the raw value.

//===================================================

const p = Promise.resolve('Promise resolved value!!');

async function getData() {
  const res = await p;   // wait for the promise to resolve
  console.log(res);      // prints: Promise resolved value!!
}

getData();
// Here, await p pauses getData until p resolves.
// Then it assigns the resolved value to res and logs it.
// p is a promise already fulfilled with "Promise resolved value!!".

// await p pauses until the promise settles and extracts the value.

// console.log(res) prints the value directly.

//============================================
//earlier

const p2 = new Promise((resolve, reject) =>{
  resolve("chiku resolved")
})

//earlier
function getDataa(){
  p2.then(res => console.log(res))
}//or just p2.then(res => console.log(res));

getDataa()

//now with async await
async function getchiku(){
  const javab = await p2;
  console.log(javab)
}
getchiku()

//======================================
//major difference between then and async await
const p6  = new Promise((resolve, reject) =>{
  setTimeout(() =>{
    resolve("smitu resolved")
  }, 3000)
})

function fetchData(){
  p6.then(res => console.log(res))
  console.log("hello smitu")
}
fetchData()

//here JavaScript is non-blocking.
// It doesn’t stop and wait for promises.
// It registers the callback for later and keeps going.
// That’s why "hello smitu" shows before the promise result.

async function getData6() {
  console.log("smitu chiku")// tatat j aa print thase.
  const res = await p6;
  console.log(res); // waits 3s, then prints
  console.log('Hello There!'); // prints AFTER
}

getData6();

// // .then way (fetchData):

// Function doesn’t wait.

// Code after .then runs immediately.

// Async result is handled in a callback.

// await way (getData6):

// Function waits (pauses) at await.

// Code after await runs only after the promise resolves.

// Looks synchronous, but still non-blocking for the outside world.

//================================================
//with this example
async function handlePromise() {
  console.log('Hi');
  const val = await p6;
  console.log('Hello There!');
  console.log(val);

  const val2 = await p6;
  console.log('Hello There! 2');
  console.log(val2);
}
handlePromise(); 