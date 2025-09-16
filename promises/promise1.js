//let newPromise = new Promise()

//=======================

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task completed')
        resolve()
    }, 1000)
})
promiseOne.then(function(){
    console.log("promise consumed")
})

//=======another synyax direct

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("async task 21")
})
//=======================================

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
resolve({username: "viha", password: 123})
        }else{
            reject("error")
        }
    },1000)
    })
promiseThree.then(function(user){
    console.log(user)
}).catch(function(err){
    console.log("error", err)
})

//===========================================

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "smitu", age: 21})
        }else{
            reject("error")
        }
    }, 1000)
})
promiseFour.then((user) =>{
    console.log(user)
    return user.username// return passes value forward
}).then((username) => {
    console.log(username)// now username = "hitesh"
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("promise either reject or resolve"))
// promiseFour
//   .then((user) => {
//       console.log(user);   // logs the full object
//       // no return here 
//   })
//   .then((username) => {
//       console.log(username); // this gets undefined
//   })

//or
// new way
// async function consumePromise() {
    try {
        const user = await promiseFour;
        console.log(user);

        const username = user.username;
        console.log(username);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("The promise is either resolved or rejected");
    }


consumePromise();
//===============================================

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
          let error = false
        if(!error){
            resolve({username: "js", age: 40})
        }else{
            reject("errors")
        }
    }, 1000)
    })

    async function consumPromiseFive () {
        try{
        const response = await promiseFive
        console.log(response)
        }catch(err){
            console.log(err)
        }
    }
    consumPromiseFive()
//===================================

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
    
}
getAllUsers()

//or with promise then catch syntax

fetch('https://api.github.com/users/hiteshchoudhary')
.then((res) => {return res.json})
.catch((error) => console.log(error))