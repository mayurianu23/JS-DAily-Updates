
//find() returns only the first element that meets the condition.
// The syntax for find() is as follows:

// array.find(function(currentValue, index, arr) {
//     return a condition that evaluates to true or false
// }, thisArg);

// currentValue (required): The current element being processed in the array.
// index (optional): The index of the current element.
// arr (optional): The original array find() was called upon.
// thisArg (optional): A value to use as this when executing the callback function. 

// ex1
let number = [1,2,3,4,5,6];
let firstEven = number.find(num =>
    num%2==0)
    console.log(firstEven);
    
//EX:2    
const item = [
    {name: "laptop",  price: 25000},
    {name: "tablet",  price: 500},
    {name : "phone",  price: 300}
];

// Find the first item with a price less than 600
const affordableItem = item.find(item => 
    item.price < 600
)
console.log(affordableItem);

