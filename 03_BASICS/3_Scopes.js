let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER:",a);   
}
console.log(a);
// console.log(b);

function one(){
    const username = "Adarsh"

    function two (){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}  
// fuction two can oparate function one but function one can't operate two, so... console.log(website) doesn't oparate

if (true){
    const username = "Adarsh"
    if(username==="Adarsh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);     It can't operate
}  
// console.log(username);     It can't operate


// +++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}

/* addTwo(6)        ( It can't oparate)
     const addTwo = function(num){               
     return num + 2
}
*/