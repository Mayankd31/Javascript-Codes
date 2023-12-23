// dates

let myDate = new Date()
// console.log(myDate); 
// it gives output like this => 2023-12-23T19:47:44.394Z

// console.log(myDate.toString());
// it gives output like this => Sat Dec 23 2023 19:48:54 GMT+0000 (Coordinated Universal Time)


// console.log(myDate.toDateString());
// it gives output like this => Sat Dec 23 2023

// console.log(myDate.toISOString());
// it gives output like this => 2023-12-23T19:50:14.666Z

// console.log(myDate.toJSON());
// it gives output like this => 2023-12-23T19:50:49.119Z

// console.log(myDate.toLocaleDateString()); 
// it gives output like this 12/23/2023

// console.log(myDate.toLocaleString());
// it gives output like this => 12/23/2023, 7:40:50 PM

// console.log(myDate.toLocaleTimeString()); 
// it gives output like this => 7:42:07 PM

// console.log(myDate.toTimeString());
// it gives the output like this => 19:46:16 GMT+0000 (Coordinated Universal Time)

// console.log(typeof myDate);


// let myCreatedDate = new Date(2023,11,24)
// let myCreatedDate = new Date(2023,11,24,7,4,6)
// let myCreatedDate = new Date("2023-12-24")
let myCreatedDate = new Date("12-24-2023")

// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp); // it gives milliseconds value from 1 january 1970

// console.log(myCreatedDate.getTime()); // it gives milliseconds value from 1 january 1970

// console.log(Math.floor(Date.now()/1000));
// to convert the output of Date.now() which is in ms to s do the above thing


let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// `${newDate.getDay()} and the time is`

newDate.toLocaleString('default',{
    weekday: "long",
})

console.log(newDate.toLocaleString('default',{
    weekday: "short"
}));