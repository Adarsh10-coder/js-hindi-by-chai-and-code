function calculateCardPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCardPrice(233,533,654,9755,2308));
    // if val1 and val2 is not given then it will return all number


const user = {
    username: "Adarsh",
    price: 999
}    
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`); 
}
handleObject(user)
        // OR
handleObject({
    username: "Sam",
    price: 399
})   


const myNewarr = [200,400,600,800]
function returnSecondvalue(getarr){
    return getarr[1]
}
console.log(returnSecondvalue(myNewarr));