function greet(name, callback){
    console.log("hi," +name)
    callback()
}
function bye(){
    console.log("bye")
}
greet("viha", bye)

//output: hi, viha
//        bye

//=======================================
//synchronous callback
function process(no, callback){
    return callback(no)
}
//Take the callback function, and call it with num (which is 5).
console.log(process(5, n => n*n))//25

console.log(process(6,n =>n+1))//7
//hereprocess calls callback right away with the number.

// The callback runs immediately (synchronously).

// The result is returned directly
//asynchronous callback
setTimeout(() =>{
    console.log("hi after some time")
}, 3000)