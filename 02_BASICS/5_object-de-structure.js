const course ={
    courseName:"js in hindi",
    courseTutor:"Hitesh sir",
    coursePrice:"999",
}
// console.log(course.courseTutor);
        // or

// const {courseTutor} = course
// console.log(courseTutor);
        // or 

const {courseTutor:tutor} = course // this is callled De-Structure 
console.log(tutor);   


// ++++++++++++++++++++++++++++++++ API ++++++++++++++++++++++++++++++++++++++

/* {
    "name": "Hitesh",
    "courseName": "JS in hindi",
    "price": "free",
   }
     // or

  [
    {},
    {},
    {}
  ]  
*/       
