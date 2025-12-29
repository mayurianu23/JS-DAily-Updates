// const nums = [1,2,3,4,5];
// const greterthanTwo = nums.filter((num)=>{
//    return num > 2 ;
// });
// console.log(greterthanTwo);

//even
// let nums  =  [1,2,3,4,5,6];
// let even = nums.filter((num)=>{
//     return num%2==0;
// })

// console.log(even);

// let prices = [100, 450, 1200, 3000, 800];
// let res = prices.filter((price,i)=>{
//    return price>200;
// })
// console.log(res);


//odd
// let nums = [1, 2, 3, 4, 5, 6];
// let res = nums.filter((num)=>{
//    return num % 2 ;
// })
// console.log(res);


//Adult user age>=18
// let users = [
//   { name: "Amit", age: 20 },
//   { name: "Rohit", age: 17 },
//   { name: "Neha", age: 22 }
// ];
// let res = users.filter((adult)=>{
//    return adult.age>=18;
// })
// console.log(res);


// let data = [0, 1, false, 2, "", 3, null, undefined, 4];
// let res = data.filter(value => !value)
// console.log(res);


// let arr = [10, 15, 20, 25];
// let result =  arr.filter(num => num>18)
// console.log(result);

// let products = [
//   { name: "Shirt", price: 500, inStock: true },
//   { name: "Jeans", price: 1200, inStock: false },
//   { name: "Shoes", price: 2000, inStock: true },
//   { name: "Cap", price: 300, inStock: true }
// ];
// let res = products.filter(product => product.inStock && product.price >= 500)

// console.log(res);


// let names = ["ram", "shyam", "sita", "gita", "mohit"];
// let res   =  names.filter(name => name.length>3);
// console.log(res);


//let data = [0, 1, false, 2, "", 3, null, undefined, 4];

// let res   =  data.filter(name => !name);
// console.log(res);


// let students = [
//   { name: "Amit", score: 85, passed: true },
//   { name: "Neha", score: 65, passed: true },
//   { name: "Rohit", score: 45, passed: false },
//   { name: "Sita", score: 95, passed: true },
//   { name: "Mohan", score: 30, passed: false }
// ];
// let res  = students.filter((val)=>{
//    return val.passed === true && val.score > 50;
// })
// console.log(res);


// let employees = [
//   { name: "Amit", dept: "IT", salary: 50000 },
//   { name: "Neha", dept: "HR", salary: 40000 },
//   { name: "Rohit", dept: "IT", salary: 60000 },
//   { name: "Sita", dept: "Sales", salary: 35000 },
//   { name: "Mohan", dept: "IT", salary: 45000 }
// ];
// let res  = employees.filter(val => val.dept === "IT" && val.salary> 45000);
// console.log(res);
// let employees = [
//   { name: "Amit", dept: "IT", salary: 50000 },
//   { name: "Neha", dept: "HR", salary: 40000 },
//   { name: "Rohit", dept: "IT", salary: 60000 },
//   { name: "Sita", dept: "Sales", salary: 35000 },
//   { name: "Mohan", dept: "IT", salary: 45000 }
// ];

// let res = employees.filter(emp => emp.dept === "IT" || emp.salary > 50000);
// console.log(res);
// let students = [
//   { name: "Amit", score: 85, passed: true },
//   { name: "Neha", score: 65, passed: true },
//   { name: "Rohit", score: 45, passed: false },
//   { name: "Sita", score: 95, passed: true }
// ];
// let names = students
//   .filter(student => student.passed)
//   .map(student => student.name);

// console.log(names);
// ["Amit", "Neha", "Sita"]



// let products = [
//   { name: "Shirt", price: 500, inStock: true },
//   { name: "Jeans", price: 1200, inStock: false },
//   { name: "Shoes", price: 2000, inStock: true },
//   { name: "Cap", price: 300, inStock: true }
// ];
// let nm = products
// .filter( pro => pro.inStock)
// .map(pro => pro.name);

// console.log(nm);

// let data = [
//   { name: "Amit", score: 80 },
//   { name: "Neha", score: 40 },
//   { name: "Rohit", score: 90 }
// ];

// let res = data
//   .map(s => s.name)
//   .filter(s => s.score > 50);

// console.log(res);


// let arr = [
//   { id: 1, name: "Amit" },
//   { id: 2, name: "Neha" },
//   { id: 3, name: "Rohit" }
// ];

// let obj = { id: 2, name: "Neha" };
// let res = arr.filter(x => x === obj);
// console.log(res);


// let arr = [
//   { id: 1, name: "Amit" },
//   { id: 2, name: "Neha" },
//   { id: 3, name: "Rohit" }
// ];

// let obj = arr[1]; // same reference as arr[1]

// let res = arr.filter(x => x === obj);
// console.log(res);



//property-wise comparison
// let arr = [
//   { id: 1, name: "Amit" },
//   { id: 2, name: "Neha" },
//   { id: 3, name: "Rohit" }
// ];

// let obj = { id: 2, name: "Neha" };

// let res = arr.filter(x => x.id === obj.id && x.name === obj.name);
// console.log(res);




// let employees = [
//   { name: "Amit", dept: "IT", salary: 50000 },
//   { name: "Neha", dept: "HR", salary: 40000 },
//   { name: "Rohit", dept: "IT", salary: 60000 }
// ];

// let obj = employees[1]; // same reference as Neha

// let res = employees
  
//   .filter(e => e === obj.name)
  
//   .map(e => e.name);

// console.log(res);
const names = [
  {fname: "mayuri" ,lname: "tarle" , age: 45 },
  {fname: "omkar" ,lname:   "shine" , age: 23 },
  {fname: "bharti" ,lname: "rao" , age: 5 },
];
// const op = names
//    .filter(x => x.age>20)
//    .map((x) =>{
//   return x.fname
// } )
// console.log(op);


//using reduce

const op = names.reduce((acc , curr)=>{
     if(acc[curr.age] > 45){
      curr=acc;
     }
     return curr.fname;
    
})
console.log(op);


