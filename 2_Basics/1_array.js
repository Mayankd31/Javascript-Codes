// array

const myArr = [1,2,3,4,5]
const animes = ["one piece","naruto","bleach"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);
// console.log(animes[0]);
// console.log(myArr2[3]);


// Array Methods

// myArr.push(6)
// myArr.push(7) // add the elements to the array at the last
// myArr.pop() // last value removed from the array
// console.log(myArr);


// myArr.unshift(7) // add the element at the begining

// myArr.shift() // remove the elements from the begining
// console.log(myArr);


// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(3)); // 2nd index



// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice, splice

console.log("A ",myArr);

const myNewArr = myArr.slice(1,4)

console.log(myNewArr);

console.log("B ",myArr);


const myNewArr2 = myArr.splice(1,4)
console.log("C ",myArr);
console.log(myNewArr2);





