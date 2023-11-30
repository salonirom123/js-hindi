// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const  jsUser = {
    name: "saloni",
    "full name": "saloni rom",
    age: 18,
    [mySym]: "mykey1",
    location: "khandwa",
    email: "salonirom@1223",
    isLogged: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser["full name"]);
// console.log(jsUser["email"]);

// console.log(jsUser[mySym]);

jsUser.email = "salonirom!21233"
// Object.freeze(jsUser)
jsUser.email = "saloniro.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello user");
}

jsUser.greeting2 = function(){
    console.log(`Hello user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());