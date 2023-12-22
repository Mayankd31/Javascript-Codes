const myName = "mayank"
const repoCount = 20

// console.log(myName + repoCount + " Value");

// console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

const Name = new String('mayank-dhosriya-com')
// console.log(Name[0]);

// console.log(Name.__proto__);
// console.log(Name.length);
// console.log(Name.toUpperCase());
// console.log(Name.charAt(2));
// console.log(Name.indexOf('y'));

const newString = Name.substring(0,4);
// console.log(newString);

const anotherString = Name.slice(-14,4);
// console.log(anotherString);


const newStringOne = "   mayank  "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://mayank.com/mayank%20dhosriya"

// console.log(url.replace('%20','-'));

// console.log(url.includes('mayank'));

console.log(Name.split('-'));

const myString = new String("Mayank Dhosriya is a student and Mayank goes to gym and mayank is a programmer too")

// console.log(myString.toLowerCase());
// console.log(myString.startsWith('May'));
// console.log(myString.endsWith('riya'));


const lang = ["HTML","CSS","JAVASCRIPT","NODEJS","MYSQL"]
// console.log(lang.at(2));
// console.log(myString.valueOf());
// console.log(myString.search("Dhosriya"));
// console.log(myString.search(/Mayank/));
// console.log(myString.search(/mayank/i));
// console.log(myString.replaceAll('Mayank','Manku'));


const str = new String("I feel good")
console.log(str.repeat(2));
console.log(str.length);
console.log(str.padStart(13,"Hi"));
console.log(str.padEnd(13,"ok"));
console.log(myString.match("May"));
console.log(myString.lastIndexOf("Mayank"));

console.log(str.constructor); //The constructor property returns the function that created the String prototype.

const str1 = "Java"
const str2 = "Script"
console.log(str1.concat(str2));

