const userEmail = "adarsh@gmail.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
// if "" present at userEmail then --> Don't have user email will be print
// if [] present at userEmail then --> Got user email will be print

// falsy values  ----> false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values -----> "0", 'false', " ", [], {}, function(){} and others which is not falsy values are truthy values

// Method to detect Array is empty or not
if (userEmail.length === 0) {
    console.log("Array is empty");
 }

// Method to detect Object is empty or not 
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
  // for this type of case first element will print
// val1 = null ?? 10
// val1 = undefined ?? 15
  // for this type of case other than null & undefined element will print
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator ----->  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
