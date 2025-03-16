// Immediately invoked function expressions (IIFE)

// which function immediately excute called IIFE
//   or 
// Due to pollution of global scope there are some issue so IIFE is used to remove that pollution

// Named IIFE
( function chai (){
    console.log(`DB CONNECTED`);   
}) ();   // ; is used when two IIFE function are written

// Unamed IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Adarsh')   
