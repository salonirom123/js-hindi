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
console.log(loginUserMassege());
