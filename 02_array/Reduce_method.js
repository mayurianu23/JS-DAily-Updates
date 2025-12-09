//Creates a new array containing only the elements that satisfy a given condition.

//sum of array
const arr = [1,2,3];
function issum(){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum  + arr[i]
    }
    return sum;
}
console.log(issum(arr));

let output = arr.reduce(function(acc ,curr))