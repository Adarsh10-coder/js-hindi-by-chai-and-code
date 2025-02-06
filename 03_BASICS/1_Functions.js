/*  BASIC EXAMPLE
function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H"); 
}
sayMyName()
*/

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}                     // NOTE----> number1 or number2 called parameter and 3 or 4 or null called argument
addTwoNumbers(4,7)
addTwoNumbers(3,null)

// We make this case bcoz in previous case we will get result value undefined.
function addAnotherNumbers(number3, number4){
   // let result = number3 + number4
   // return result
       // OR
    return number3 + number4
}
const result = addAnotherNumbers(3,8)
console.log("result:", result);


function loginUserMessage (username) { 
    if (username === undefined) { 
    console.log("Please enter a username"); 
    return 
    }
    return `${username} just logged in` 
} 
// console.log(loginUserMessage( 
console.log(loginUserMessage())
