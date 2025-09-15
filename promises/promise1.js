let newPromise = new Promise()

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
    console.log("async task 2")
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