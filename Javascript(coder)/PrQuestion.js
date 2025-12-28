// 1 create array with 3 fruits and print the second
let fruite = [ "banana" , "cherry","apply"];
//console.log(fruite[1]);

// 2 add mango at end and pineapple at begin
// fruite.push("mango");
// fruite.unshift("pinapple");

//3.add kiwi at 1 index
//fruite.splice(1,0,"kiwi");


//4.sort and revrese it
//fruite.sort().reverse();
//console.log(fruite);



//square of arraya element
let nums = [1,2,3,4,5];
let res = nums.map(function(val){
    return val * val ;
})
console.log(res);


//.Filter()
let num = [1,2,3,4,5];
let op = num.filter(val => val > 1)
console.log(op);


//.reduce()
let arr = [1,2,3,4,5];
let output = arr.reduce((acc , val)=>{
   return acc + val ;
},0)
console.log(output);


//use.find() to get the first number less than 10
// let arrrr = [10,3,5,78];
// let result = arrrr.find(function(val){
//     return val > 8;
// });
// console.log(result);

//.some() to check if any student scored below 35
let arrrr = [10,37,53,78];
let result = arrrr.some(function(val){
    return val < 35;
});
console.log(result); //true


//.every() to check if all number are even

let Arr = [1,2,3,4,5];
let opt = Arr.every(function(val) {
    return val%2==0;
})
console.log(opt);//false


//destructure array to get fname and lname
let name = ["mayuri" , "tarle" , 34];
let [fname , lname ,age] = name;
console.log(name);


//merge array using spred operator

let a = [1,2];
let b = [3,4];
let c = [...a, ...b];
console.log(c);

//add "india" to strat of array using spred
let conutries = ["uk" ,"Russia"];
conutries = ["India",...conutries];
console.log(conutries);

//Clone array (not by refrence)
let ar = [1,2,3,4];
let ar2 = [...ar];
console.log(ar2);

