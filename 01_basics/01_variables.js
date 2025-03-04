const accountId = 123456789

/* const is keyword which create a space for variable in memory
once we store the value in const we can not change it further
 */

let accountEmail = "anuja@google.com"

/*let and var is also a keyword which provides space for variables in memory
the difference between let and var is "var does not follow the scope of code that is block scope and functional scope" */

var accountPassword ="12345"

accountCity = "Mumbai"

/*here in line no 14 accountCity we can not decleare any keyword for variable still javascript created a space for it
this is the one of the feature of javascript but this is not a good practice. 
 */


//accountId = 12 // not allowed
accountEmail = "as@gmail.com"
accountPassword = "121212"
accountCity = "Pune"

let accountState;
/*when we declear a variable but can not define its value then javascript bydefault take it as "Undefined" 
*/
console.log(accountId);
console.table([ accountId, accountEmail, accountPassword, accountCity, accountState])

