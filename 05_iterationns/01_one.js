// // for loop

// for (let i = 0; i < 10 ; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(`outer loop: ${i}`);
//     for (let j = 1; j < 10; j++) {
        // const element = myArr[j];
        // console.log(`inner loop: ${j} , ${i}`);
//         console.log(i + `*` + j + `=` + i * j);
//     }
// }

let myArr = ["flash", "batman", "superman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

// while loop
let i = 0
while (2==2) {
    // console.log(`hello`);
    i++;
}

let score = 1
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);

