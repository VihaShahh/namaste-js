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