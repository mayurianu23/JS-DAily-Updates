//what is map
// =>so map methos is used to creating a new array from existing one by appling function to eachthe element of the array

const nums = [1,2,3,4,5];
const multiply = nums.map((num,i,arr)=>{
      return num * 3 ;
});
console.log(multiply); //[ 3, 6, 9, 12, 15 ]


//square of each number
let nums = [2, 4, 6, 8];