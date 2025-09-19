// Promise.all([p1,p2,p3])

// Promise.allSettled([p1,p2,p3])

// Promise.race([p1,p2,p3])

// Promise.any([p1,p2,p3])

const p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        reject("p1 sucess")
    }, 3000)
})

const p2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        reject("p2 resolve")
    }, 1000)
})

const p3 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
    reject("p3 resolve")
    }, 2000)
})

Promise.any([p1,p2,p3]).then((result) =>{
    console.log(result)
})
.catch(err => {
    console.log(err)
})