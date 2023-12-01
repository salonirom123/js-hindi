// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "saloni"
    function two(){
        const website = "YT"
        // console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if (true) {
    const username = "saloni"
    if (username === "saloni") {
        const website = " YT"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ************************************interesting************************************************
// console.log(add1(5));
function add1(num){
    return num + 1
}

add1(3)
// console.log(add2(5)); // error
const add2 = function(num){
    return num + 2
}

add2(5)