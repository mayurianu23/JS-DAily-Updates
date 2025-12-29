// const nums = [1,2,3,4,5];
// const sumofarray = nums.reduce((acc,curr)=>{
//    return acc + curr;
  
// },0)
// console.log(sumofarray);




// Count Frequency (VERY IMPORTANT)=>
// const fruits = ["apple", "banana", "apple", "orange"];
// const count = fruits.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});

// console.log(count);



// let arr = [1,2,3,4];
// let res = arr.reduce(function(acc , curr){
//     acc = acc + curr;
//     return acc;
// },0);
// console.log(res);;


//Find max in array
// let arr = [9,2,6,8,2,23];
// let output = arr.reduce((max , curr)=>{
//        if(curr > max){
//          max = curr;
//        }
//        return max;
// }, )
// console.log(output);


// let names = [
//   {fname: "mayuri" ,lname: "tarle" , age: 45 },
//   {fname: "omkar" ,lname:   "shine" , age: 5 },
//   {fname: "bharti" ,lname: "rao" , age: 5 },
// ];
//list of fullname
// let result = names.map(val => val.fname +" " + val.lname)

//{5:2 , 45:1}

let result = names.filter(function(val){
         return val.fname;
})
console.log(result);
