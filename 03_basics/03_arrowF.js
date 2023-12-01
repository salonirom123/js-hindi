const user = {
    username: "saloni",
    price: 999,

    welcomemsg: function(){
        console.log(`${this.username}, welcome to our clg`);
        console.log(this);
    }
}

// user.welcomemsg()
// user.username = "sam"
// user.welcomemsg()
// console.log(this);

// function chai(){
//     let username = "saloni"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "salu"
//     console.log(this.username);
// }

// *******Arrow Fun*****

const chai = () => {
    let username = "salu"
    console.log(this);
}

// chai()

// const add2 = (num1, num2) =>{
//     return num1 + num2 //explicitly return
// }

// const add2 = (num1, num2) => num1 + num2 //implicite return

// const add2 = (num1, num2) => (num1 + num2) //implicite return

// object return by af

const add2 = (num1, num2) =>({username: "saloni"})

console.log(add2(5,2));

// const myArr = [2, 3, 4, 5, 6]

// myArr.forEach()

