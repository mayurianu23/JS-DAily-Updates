//Q1Write a function that returns the square of a number
// function square(){
//     let a = 20;
//     //console.log(a*a);
// }
// square();

//Q3write a function that checks whether a number is even or odd.
// function  even(num){
  
//     if( num%2==0){
//         console.log("even");
//     }else{
//         console.log("odd");
        
//     }
// }
// even(2);

//Write a function that adds two numbers and returns the result.
// const add = function(a,b){
//  return a + b;
// }
 
// console.log(add(2,2));



//Write a function that prints "Hello World" 5 times using a function (you can use a loop inside the function).

//const loops = ()=>{
//      for(let i = 1; i<=5; i++){
//        console.log("hello world!!"); 
//      }
// }
// loops();


//Declare a function fullName and it print out your full name.

// function fullName(fnamme,lname){
//   console.log(fnamme+" "+lname);
  
// }
// fullName("mayuri","tarle");


//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumber(a,b){
     let c = a + b ;
     return c;

}
console.log(addNumber(2,2));
 

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const areaofrectangle = (length , breath) =>{
      return length * breath;
}
console.log(areaofrectangle(2,3));


//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

const perimteOfRecatngle = function(length , breath) {
      return 2* (length + breath);
}
console.log(perimteOfRecatngle(2,3));


// /A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism
const volumeOfRectPrism = function(length , breath,hight) {
      return length + breath + hight;
}
console.log(volumeOfRectPrism(2,8,3));

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const areaCircle = function(r){
  return  Math.PI *r*r;
}
console.log(areaCircle(3));


