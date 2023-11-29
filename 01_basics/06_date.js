// Dates
let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString())
// console.log(mydate.toISOString());
// console.log(mydate.getTimezoneOffset());
// console.log(mydate.toLocaleTimeString())
// console.log(mydate.toJSON());
// console.log(typeof mydate);

// let mycreateDate = new Date(2023,0,23)
// let mycreateDate = new Date(2023,0,23,5,3)
// let mycreateDate = new Date("2023-0-23")
let mycreateDate = new Date("01-14-2023")
// console.log(mycreateDate.toLocaleString());

let myTimestsmp = Date.now()

// console.log(myTimestsmp)
// console.log(mycreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and time`

newDate.toLocaleString('default',{
    weekday: "long",
})