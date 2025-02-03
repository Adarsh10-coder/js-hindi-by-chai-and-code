const Arr = [4,6,2,8,9,7,1]
const Arr2 = ["ironman","thor","spiderman","hulk"]
const Array3 = new Array(6,9,3,4,0)

console.log(Arr[0]);
console.log(Arr2[1]);

// ARRAY METHODS
 
Arr.push(6)
Arr.push(7)
Arr.pop()  // it remove last element
Arr.unshift(9) // it add 9 in begining
Arr.shift()

console.log(Arr);
console.log(Arr.includes(8));
console.log(Arr.indexOf(7));

const newArr = Arr.join()
console.log(newArr);
console.log(typeof newArr);

// SLICE , SPLICE

console.log("A ",Arr);

const myn1 = Arr.slice(1, 3)

console.log(myn1);
console.log("B ",Arr);

const myn2 = Arr.splice(1, 3)
console.log("C ",Arr);
console.log(myn2);