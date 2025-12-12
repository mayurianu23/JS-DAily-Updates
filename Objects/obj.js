// // it is collection of propertey
let person ={
    name: "mayuri",
    age: 25,
    city : "nashik",
}
//console.log(person);  //{ name: 'mayuri', age: 25, city: 'nashik' }
//console.log(person.city);// to find out keys value we use just (.) operator
//console.log(person["city"]);//second way 

//*****To print all keys, values of specific object
// let keys = Object.keys(person)  //[ 'name', 'age', 'city' ]
// console.log(keys);
// let val = Object.values(person)
// console.log(val);


//*****To  add any kay:
// person.gender = "female"  //{ name: 'mayuri', age: 25, city: 'nashik', gender: 'female' }
//console.log(person);

 //*****To Delete any key:
// delete person.gender;
 //console.log(person);

 //*****To check weather there is key is there
// console.log("gender" in person);

//*****Function with in Object
// let adult ={
//     name: "mayuri",
//     age: 25,
//     city : "nashik",

//     greet : function(){
//         console.log("this is function");
//     }

// }
// console.log(adult.greet());
// adult.greet();

//*****To check entries
// let entries = Object.entries(person)
// console.log(entries);


/* To copy the Objcet */
//  let newPerson = Object.assign({},person)
//  console.log(newPerson);
 

//****Object with in object */
let obj1 = {
    name: "mayuri",
    age: 25,
    city : "nashik",

    obj2: {
         math : 90,
         science : 80,
         chem: 73,
         physics : 78,
    }
}
console.log(obj1.obj2);
console.log(obj1.obj2.chem);
