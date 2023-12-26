// for of loop

// ["","",""]
// [{},{},{}]

// Syntax

// for (const iterator of object) { 
    // iterator => variable declaration like i,val,num or whatever we want
    // object => kis par loop lagana hai
// }

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    //console.log(`Each char is ${greet}`);   
}


// Maps => is also an object and have unique values
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
// map.set('IN', "India")

// console.log(map);   


for (const key of map) {
    console.log(key);
    
}

for (const [key,value] of map) {
    console.log(key, ':-',value);
}


const myObject = {
    game1: 'GTA',
    game2: 'BGMI'
}

// from for of loop we cannot iterate in object

// for (const [key,value] of myObject) {
//     console.log(key, ':-',value);
// }


