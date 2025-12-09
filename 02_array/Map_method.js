//                          *********************Map()*********************
//Map function return modified array
// Transforms each element in an array and returns a new array of the same length.

//Expexted OP: [2,4,6,8,10]
// 1.Doubled of Array

let number = [1,2,3,4,5];
const Result = number.map(num => num*2)
console.log(Result);
//Another Way using function
// const arr = [1,2,3,4,5];
// function double(x){
//     return x*2; //Transformation Logic
// }
// const output = arr.map(double)
// console.log(output);


// 2. Tripal of Array
// const arr = [1,2,3,4,5];
// function tripal(x){
//     return x*3; //Transformation Logic
// }
// const output = arr.map(tripal)
// console.log(output);


// 3.Binary of array 
// const arr = [1,2,3,4,5];
// function binary(x){
//     return x.toString(2); //Transformation Logic
// }
// const output = arr.map(binary)
// console.log(output);


// 4.Another way Directly function Passed to map method
// const arr = [1,2,3,4,5];
// const output = arr.map(function binary(x){
//     return x.toString(2); //Transformation Logic 
// });
// console.log(output);


