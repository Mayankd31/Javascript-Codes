
function sayMyName(){
    console.log("M");
    console.log("a");
    console.log("y");
    console.log("a");
    console.log("n");
    console.log("k");
}

// sayMyName()// execution


// function addTwoNumbers(num1,num2){
//    console.log(num1 + num2);
// }

// const result = addTwoNumbers(3,5) // 8
// console.log(result); // undefined

// addTwoNumbers(3,4) // 7
// addTwoNumbers(3,"4") // 34
// addTwoNumbers(3,"a") // 3a
// addTwoNumbers(3,null) // 3

function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // console.log("mayank");
    // return result
    // console.log("mayank"); // return ke baad kuch bhi print nhi hota hai

    return num1 + num2

 }

const result = addTwoNumbers(3,5)
// console.log("Result:",result); // 8


function loginUserMessage(username = "sam"){

    if(!username){ // username === undefined
        console.log("Please Enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("mayank")); // mayank just logged in
// console.log(loginUserMessage("")); //  just logged in
// console.log(loginUserMessage()); // undefined just logged in
// console.log(loginUserMessage("mayank")); // mayank just logged in


// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,400,600)); // [ 200, 400, 600 ]

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,600,2000)); // [ 600, 2000 ] 
// val1 = 200 , val2 = 400 and rest in the array [ 600, 2000 ] 



// objects in functions
const user = {
    username: "mayank",
    prices: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

// another method
handleObject({
    username: "Sam",
    price: 399
})


// arrays in functions
const myNewArray = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// another method
console.log(returnSecondValue([200,400,600,800]));




