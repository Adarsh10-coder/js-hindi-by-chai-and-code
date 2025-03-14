const user = {
    username: "Adarsh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()
// 'this' access as it print the usename of current context 
// So.... Sam is printed

console.log(this);
// Current context will be empty bcoz we are in Node environment so.. this refers to a empty onject
// bcoz there are no any context in global


function chai(){
    let username = "Bittu"
    console.log(this.username);
}
chai()
// undefined ---> mean this context only work in object not in function


// +++++++++++++++++++++++ ARROW +++++++++++++++++++++++++++++++

/* const addTwo = (num1,num2) => {
    return num1 + num2
}
*/
    // OR
const addTwo = (num1,num2) => (num1 + num2)
// If we need to return object
// const addTwo = (num1,num2) => ({username: "Adarsh"})
console.log(addTwo(5,8));      
