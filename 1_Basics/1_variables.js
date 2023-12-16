const accountId = 12345
let accountEmail = "abc123@gmail.com"
var accountPassword = "54321"
accountCity = "Indore"
let accountState;

// accountId = 2 // not allowed

accountEmail = "abc@google.com"
accountPassword = "121212"
accountCity = "Uijain"

console.log(accountId);

/* prefer not to use var because of
issue in block scope and functional scope*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])



