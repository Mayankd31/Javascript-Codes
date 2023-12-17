// Primitive data types => these datatypes are call by value means all the changes of the data is done on the copy of that data not on the original

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

const score = 100
const scoreValue = 100.5

const isLoggedIn = true
const outsideTemp = null
let num;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id);
console.log(anotherId);
console.log(id==anotherId);

const bigNumber = 67868768768768686868686n


// Reference data types(Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name:"mayank",
    age:20,
}

let myFunction = function(){
    console.log("Hello Mayank");
}

console.log(typeof myFunction);
console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
