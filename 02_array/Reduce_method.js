//Creates a new array containing only the elements that satisfy a given condition.

//sum of array
const arr1 = [5,5,6,7];
function issum(){
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum = sum  + arr1[i]
    }
    return sum;
}
console.log(issum(arr1));

//Insted of using this we simpaly use  this Reduce method()
const arr = [5,5,6,7];
let res = arr.reduce((acc,curr)=> 
     acc+curr,0)
console.log(res);

//another way using simapl function
const arrr = [5,5,6,7];
let op = arrr.reduce(function(acc,curr){
},0);
console.log(op);


//2.max of array
let output = arr.reduce(function(max,curr){
    if(curr > max){
        max = curr;
    }
    return max;
}, 0);
console.log(output);
