/* Types of datatype ---->
1.primitive
    String,Number,Boolearn,null,undefined,Symbol,BigInt

2.Non-primitive(reference)   
    Array,Objects,Functions
*/

const Id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(Id===anotherId);

const bigNumber = 85763876897996n

const heros = ["ironman","thor","spiderman","hulk"];

let myObj = {
    name:"Adarsh",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction);

 // *******************************MEMORY**********************************
 /* Types of memory --->
  1.stack (primitive)
  2.Heap (non-primitive)
  */
