// const nums = [1,2,3,4,5];
// const sumofarray = nums.reduce((acc,curr)=>{
//    return acc + curr;
  
// },0)
// console.log(sumofarray);




// Count Frequency (VERY IMPORTANT)=>
const fruits = ["apple", "banana", "apple", "orange"];
const count = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(count);

