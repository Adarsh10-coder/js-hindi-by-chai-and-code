const name = "Adarsh"
const repocount = 50
// console.log(name + repocount + " value");
console.log(`My name is ${name} and my repocount is ${repocount}`); //better way

const gameName = new String('Adarsh-FC-com')

console.log(gameName);
console.log(gameName[0]);
console.log(gameName[4]);
console.log(gameName.__proto__);
// these two are some example of prototype
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4) // 0 mean start from begining
console.log(newString);

const newString2 = gameName.slice(-8,4) // -8 mean start from end
console.log(newString2); 

const newString3 = "   Adarsh    "
console.log(newString3);
console.log(newString3.trim()); // when we don't need space

const url = "https//:hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));


console.log(gameName.split('-'));









