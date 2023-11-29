// primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp =  null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34562938274949n



// Reference (Non primitive)

// Array, Objects, Functions,  

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "salu",
    age: 22,

}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);
// link

// **************************************************************************

// stack (primitive), Heap (non primitive)

let myYoutname = "salu"

let anothername = myYoutname
anothername = "saloni"

console.log(myYoutname);
console.log(anothername);

let user1 = {
    email: "salo@1233",
    upi: "user@2333"
}

let user2 = user1

user2.email = "google@1223"
console.log(user1);
console.log(user2);