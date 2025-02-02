let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // object always

let mycreatedDate = new Date(2025,0,23)
console.log(mycreatedDate.toDateString());
 // NOTE ---> months start in js is from 0 mean 0-->jan, 1-->fab ...etc

let mycreatedDate2 = new Date("01-21-2025")  // In this case month start from 1
console.log(mycreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mycreatedDate2.getTime());
console.log(Math.floor(Date.now()/1000));
 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
      weekday: "long",
      // Time zone ...etc
    })