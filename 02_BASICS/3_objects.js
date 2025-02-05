// Single Ton
// Object.create

// Object literals
const mySym = Symbol("key1")

const JsUser={
     name: "Adarsh",
     "Full name": "Adarsh RAj",
     [mySym]: "mykey1", // [] is use bcoz to get its type in symbol
     age: 19,
     location: "Patna",
     Email: "adarsh@gmail.com",
     isLoggedIn: false,
     lastLogginDays: ["monday","saturday"]
}
console.log(JsUser.Email);
console.log(JsUser["Email"]);
console.log(JsUser["Full name"]); // this is only way to print this type of case 
console.log(JsUser[mySym]);

JsUser.Email = "adarsh@chatgpt.com"
// Object.freeze(JsUser) // it don't allow to change  
// JsUser.Email = "adarsh@microsoft.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS iser ");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user , ${this.name}` );
} 
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
