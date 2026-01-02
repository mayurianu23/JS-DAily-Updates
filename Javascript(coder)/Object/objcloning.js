//using spre operator


let obj = {
    name:"mayuri",
    age: 23,
    city:"nashik"
}

let obj2 ={...obj}
obj2.age=90;

console.log("obj :",obj);
console.log("obj2: ",obj2);



//using Assign Object.assign({},src);
let src = {
    name:"mayuri",
    age: 23,
    city:"nashik"
}

let  dest = Object.assign({},src);
dest.age=90;
console.log("obj :",src);
console.log("obj2: ",dest);


//itration
let person = {
    name:"sayli",
    age: 3,
    city:"ngn"
};

let person2 = {};


for(let key in person){
    let newKey = key;
    let newValue =person[key] ;
    //insert newKey and values in dest and create a clone
    person2[newKey] = newValue;
    
}

//for checking
person2.age=67;
console.log("obj1 :",person);
console.log("obj2: ",person2);