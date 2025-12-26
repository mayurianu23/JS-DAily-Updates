//what is map
// =>so map methos is used to creating a new array from existing one by appling function to eachthe element of the array

// const nums = [1,2,3,4,5];
// const multiply = nums.map((num,i,arr)=>{
//       return num * 3 ;
// });
// console.log(multiply); //[ 3, 6, 9, 12, 15 ]


//square of each number
// let nums = [2, 4, 6, 8];
// let square = nums.map((num)=>{
//    return num * num ;
// })
// console.log(square);


//Even
// let nums = [1,2,3,4,5,6, 8];
// let even = nums.filter((num)=>{
//      return num%2==0;
// })
// console.log(even);

//String array to uppercase 
// let names = ["mayuri" , "yogesh" , "tarle"];
// let upper = names.map((str)=>{
//      return str.toUpperCase();
// })
// console.log(upper);


// let products = [
//   { name: "Shirt", price: 500 },
//   { name: "Jeans", price: 1200 },
//   { name: "Shoes", price: 2000 }
// ];
// let obj = products.map((pr)=>{
//    return pr.price;
   
// })
// console.log(obj);

// let users = [
//   { name: "Ravi", age: 25 },
//   { name: "Neha", age: 16 }
// ];
// let op = users.map((user)=>{
//      return{
//          name:user.name,
//          age:user.age,
//          isAdult:user.age>=18
//      };
// });
// console.log(op);
// let nums = [1, 2, 3];

// let res = nums.map(num => num + "1");

// console.log(res);


let users = [
  { name: "A", age: 20 },
  { name: "B", age: 30 }
];

let res = users.map(user => {
  user.age = user.age + 1;
  return user;
});
console.log(res);
