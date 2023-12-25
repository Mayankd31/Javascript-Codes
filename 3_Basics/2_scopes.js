// let a = 10
// const b = 20
// var c = 30

// var c = 300

let a = 300

if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(a);


function one(){
    const username = "Mayank"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // gives an error

    two()
}

// one()


if (true) {
    const username = "mayank"
    if(username === "mayank"){
        const website = " youtube"
        //console.log(username + website); => mayank youtube
    }
    // console.log(website); => gives an error
}

// console.log(username); // it also gives an error

// ******************** interesting ********************


console.log(addOne(5));
function addOne(num){
    return num + 1
}

// addOne(5)


addTwo(5) // gives an error (concept of hoisting=> function ko access kar raha hai uske declaration se phle)

// this is also called expression
const addTwo = function(num){
    return num + 2
}

// addTwo(5)





