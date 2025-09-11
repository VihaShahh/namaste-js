//rest - array
function addMumber(a,b,c,...other){
    console.log(other)
    return a+b+c
}
const result = addMumber(2,2,4,6,5,24,4)
console.log(result)

//spread - array

let names = ["viha", "smitu"]
function getNames(name1, name2, names3)
{
 console.log(name1,name2,names3)
}
getNames(...all)

//=========================================

//object - rest

let allStudents ={
    name: "viha",
    age: 21,
    hobbies: ["singing", "music"]
}

// const {age, name} = allStudents
// console.log(name) //destructuring concept

const {age, ...rest} = allStudents
console.log(rest)


//spraed object
var newStudent ={
    ...allStudents, // upar vadu j lidhu
    age:"29" //overwrite the value
}

console.log(newStudent)















