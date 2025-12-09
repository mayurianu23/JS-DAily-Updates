//ItCreates a new array containing only the elements that satisfy a given condition.

// filter Odd values
// const arr = [1,2,3,4,5,6];  
// function isodd(x){
//     return x % 2;
// }
// const op = arr.filter(isodd)
// console.log(op);

//Filter even values
// const arr = [1,2,3,4,5,6];  
// function iseven(x){
//     return x%2==0;
// }
// const op = arr.filter(iseven)
// console.log(op);


//Filter greater than 4 values using arrow function
const arr = [1,2,5,6,7,2,9,7];  
const op = arr.filter((x)=>{
    return x>4;
});
console.log(op);
