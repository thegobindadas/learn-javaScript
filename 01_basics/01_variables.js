const accountId = 123456789;
let accountEmail = "gobinda123@google.com";
var accountPassword = "123450"
accountCity = "jaipur"
let accountState;


// accountId = 2  // not allowed
accountEmail = "gd@google.in"
accountPassword = "582456"
accountCity = "Bengauru"


/*
Prefer mot to use var 
because of issue in block scope and functional scope
*/


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])