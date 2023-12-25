// const tinderUser = new Object() // it is a singleton object
const tinderUser = {} // it non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abcd@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Mayank",
            lastName: "Dhosriya"
        }

    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} // same array wali problem object ke andar object aa jaayega

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);


// when the values comes from the database it look like this which is array of objects
const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },

    {
        id: 1,
        email: "m@gmail.com"
    },

    {
        id: 1,
        email: "m@gmail.com"
    }
]

// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // it gives the output in the form of array

// console.log(Object.values(tinderUser)); // it gives the output in the form of array

// console.log(Object.entries(tinderUser)); // it gives the output like array of array


// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // it checks if the value is present or not and returns the output in the form of boolean


const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor


// syntax for accessing the object properties by object de-structure
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);



// JSON => Javascript Object Notation
// {
//     "name": "Mayank",
//     "courseName": "js in hindi",
//     "price": "free"
// }

// api se values ya toh hame object ke form me mil sakti hai ya phir array ke form me

// [
//     {},
//     {},
//     {}
// ]





