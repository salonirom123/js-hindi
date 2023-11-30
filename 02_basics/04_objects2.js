// const tinderUser = new Object{} //singleton object hai
const tinderUser = {} //non singleton obj

tinderUser.id = "12345"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "saloni",
            lastname: "rom"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}

const obj2 = {3: "aa", 4: "bb"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "gkj@1233"
    },
    {
        id: 1,
        email: "gkj@1233"
    },
    {
        id: 1,
        email: "gkj@1233"
    },
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(instructor);

// Json

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]