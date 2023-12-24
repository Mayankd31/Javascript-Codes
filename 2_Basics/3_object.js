// singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Mayank",
    "full name": "Mayank Dhosriya",
    [mySym]: "mykey1",
    age: 20,
    location: "Indore",
    email: "mayank@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}


// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email = "mayank@google.com"
// Object.freeze(jsUser)
jsUser.email = "mayank@outlook.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
