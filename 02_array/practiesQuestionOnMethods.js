// const array = [
//     {fname: "mayuri", lname:"tarle", age:21},
//     {fname: "omkar", lname:"tarle", age:21},
//     {fname: "bharti", lname: "tarle",age: 45},
// ];
//list of fullname
// const output = array.map(x =>x.fname+" "+x.lname);
// console.log(output);

//find out how many users  have perticular age
//{21: 2, 45:1} expected OP
// const output = array.reduce(function(acc, curr){
//      if (acc ) {
        
//      }

// },{});
// console.log(output);
 

// ************************************Map()**************************************
// q1Convert an array of student names to uppercase using map.
// const student = ["mayuri","bantya","tara","john","jevhiar"];
// let result = student.map(name => 
//     name.toUpperCase())
//     console.log(result);
    
//q2 From an array of objects {name, age}, return an array of only the names
// let arr = [
//     {name : "mayuri" , age : 23},
//     {name : "tara" , age : 21},
//     {name : "yoga" , age : 45}
// ];    
// let output = arr.map(arr => arr.name
// )
// console.log(output);


//q3 Add a new property id (index) to each object using map.
// Add a new property id (index) to each object using map

// const students = [
//   { name: "Mayuri", age: 22 },
//   { name: "Raj", age: 25 },
//   { name: "Akhil", age: 20 },
//   { name: "Priya", age: 23 }
// ];

// const updatedStudents = students.map((student, index) => {
//   return {
//     ...student, //...student (spread operator)  
//     id: index   // add index as id
//   };
// });

// console.log(updatedStudents);


//q4 Convert an array of strings into an array of string lengths.
const arrayofstring = ["apple", "banana", "cat", "mayuri"];
let op = arrayofstring.map(word => 
    word.length
)
console.log(op);



