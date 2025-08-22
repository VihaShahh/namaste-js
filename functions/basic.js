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