
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
console.log(loginUserMessage("mayank"));



