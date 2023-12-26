const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
} 


// for (const key in myObject) {
//     console.log(key);
// }

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js","rb","java","py","cpp"]

// for (const key in programming) {
//     console.log(key);
// }

// 0
// 1
// 2
// 3
// 4

for (const key in programming) {
    // console.log(programming[key]);
}


const map = new Map()

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")


// so from for in we cannot iterate in maps
for (const key in map) {
    console.log(key);
    
}