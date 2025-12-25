// var 
// Var is function scope it can be accesible outside of block

// {
// var a = 10;
// }
// console.log(a);
  

//Let
//let is a block scope
{
let a = 10;
console.log(a);
}
// console.log(a);// ERROR a is not defined 

//const
//const cannot be declred without initialziation
const pi = 3.15 ;
console.log(pi);




// variable Shadowing

function test(){
    let a = "Hello";
 
    if(true){
        let a = "Hi"
        console.log(a);
        
    }

    console.log(a);
    
}
test();




//Hoisting
