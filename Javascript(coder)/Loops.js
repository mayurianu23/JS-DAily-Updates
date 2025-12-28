// for(i=0;i<=5;i++){
//     console.log(i);
// }



// for(i=1;i<=20;i++){
//     if (i%2==0) {
//         console.log(i); 
//     }
// }



// for(i=10; i>=1; i--){
//     console.log(i);
// }


// let arr = [10, 20, 30, 40];
// for( let i=1 ;i<arr.length;i++){
//     console.log(i,arr[i]);
 
// }



//For-OF

// let arr = [10,20,30,40,50];
// for (const value of arr) {
//     console.log(value);
// }

//for-each()
// let arr = [10, 20, 30, 40];
// arr.forEach( (value) =>{
//   console.log(value);
// });

 let arr = [1,2,3,4,5];
 arr.forEach((val) => {
   console.log(val+5);

 })
  //console.log(arr)
let user = { name: "Amit", age: 20 };

for (let key in user) {
  console.log(key, user[key]);
}
