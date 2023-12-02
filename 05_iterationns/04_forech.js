const coding = ["js", "rb", "java", "cpp"]

// coding.forEach(function(val){
//     console.log(val);
// })


coding.forEach((item) => {
    // console.log(item);
})

function printme(item){
    console.log(item);
}
// coding.forEach(printme)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        langname: "js",
        langfile: "js"
    },
    {
        langname: "java",
        langfile: "java"
    },
    {
        langname: "ruby",
        langfile: "rb"
    },
]

myCoding.forEach((item) => {
  console.log(item.langname);
})