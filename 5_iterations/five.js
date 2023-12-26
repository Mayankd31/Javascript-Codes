const languages = ["js","ruby","java","python","cpp"]

// because we pass call back function in for each loop function does not have function name

// using normal function in for each loop
// languages.forEach( function (val) {
//     console.log(val);
// } )


// using arrow function in for each loop
// languages.forEach( (val) => {
//     console.log(val);
// } )


// using function as a reference in for each loop

// function printMe(item) {
//     console.log(item);
// }

// languages.forEach(printMe)



// languages.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )


const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },

    {
        languageName: "java",
        languageFile: "java"
    },

    {
        languageName: "python",
        languageFile: "py"
    }
]

myCoding.forEach( (item)=> {
    console.log(item.languageName  + " = " + item.languageFile);
} )






