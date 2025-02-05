/* BASICS EXAMPLE
 const tinderUser={}
 
 tinderUser.id = "123abc"
 tinderUser.name = "Jon snow"
 tinderUser.isLoggedIn = false
 
 console.log(tinderUser);
*/ 

const regularUser = {
    email: "adarsh@google.com",
    fullname: {
        username: {
            firstname: "Adarsh",
            lastname: "Raj",
        }
    }
}
console.log(regularUser.fullname); 
console.log(regularUser.fullname.username.firstname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);
     // or
const obj3 = {...obj1, ...obj2}
console.log(obj3);

// lec-17 remaining some last part
