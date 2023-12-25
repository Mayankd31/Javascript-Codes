// Immediately Invoked Function Expressions (IIFE)

(function myFunction(){
    // named IIFE
    console.log(`DB Connected`);
})();

// () in first parenthesis we write the function definition and () second parenthesis is the execution call

// global scope ke pollution se jo problems hoti hai kai baar, jo global scope ke jo bhi declaration waha par uske pollution ko hatane ke liye iife ka use karte hai

// myFunction()

( (name) => {
    // unnamed IIFE
    console.log(`DB Connected To ${name}`);
} )('mayank')