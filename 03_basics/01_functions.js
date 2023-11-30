function saysmyname (){
   console.log("s");
   console.log("a");
   console.log("l");
   console.log("o");
   console.log("n");
   console.log("i");
}

// saysmyname()

// function add2num(num1, num2){
//     console.log(num1 + num2);
// }

function add2num(num1, num2){
    // let res = num1 + num2
    // return res
    // console.log("salu");
    return num1 + num2
}


const res = add2num(1,8)
// console.log("result", res);

function loginUserMassege(username = "sam"){
    if(!username){
       console.log("Please enter username");
       return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMassege("Saloni"));
// console.log(loginUserMassege());

function calculateCartPrice(val1, val2, ...num1){//rest operator (...)
   return num1
}

// console.log(calculateCartPrice(200, 300, 400, 2000));

const user = {
    userId:  "saloni",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnedSecondValue(getArray){
    return getArray[1]
}

// console.log(returnedSecondValue(myNewArray));

console.log(returnedSecondValue([200, 300, 400, 500]));
