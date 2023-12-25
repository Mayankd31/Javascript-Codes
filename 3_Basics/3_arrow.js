const user = {
    username: "mayank",
    price: 399,


    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// this keyword means current context ko refer karta hai


// user.welcomeMessage() // => mayank, welcome to the website
// user.username = "sam"
// user.welcomeMessage() // => sam, welcome to the website

// console.log(this); // refer to an empty object


// function one(){
//     let username = "mayank"
//     console.log(this.username);// we cannot use this keyword like    this in this function , rightnow it gives undefined
// }

// one()


// const one = function(){
//     let username = "mayank"
//     console.log(this.username); // we cannot use this keyword like    this in this function , rightnow it gives undefined
// }

// one()


const one = () => {
    let username = "mayank"
    console.log(this.username); // we cannot use this keyword like    this in this arrow function , rightnow it gives undefined
}

// one()


// basic arrow function
// Explicit return matlab return keywowrd use karte hai
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// curly braces use hua toh return keyword likhna padega 

// console.log(addTwo(3,5));


// Implicit return
// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)
// parenthesis use hua toh return keyword nhi likhna padega 

const addTwo = (num1,num2) => ({username: "mayank"})
console.log(addTwo(3,5));
// { username: 'mayank' }
