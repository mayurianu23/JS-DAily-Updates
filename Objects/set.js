/*it is a built-in object that lets you store unique values (no duplicates allowed).
Think of a Set like a special array that automatically removes duplicates. 
A Set is a collection of values where:
   Every value is unique
   Order is preserved (insertion order)
   You can store any type — number, string, object, etc*/


   let number = new Set([1,2,3,4,5,1,1,1])
   console.log(number);//Set(5) {1,2,3,4,5}

//To add values in emptySet
let myset = new Set();
myset.add("apple")
myset.add("banana")
myset.add("cherry")
//has()
console.log(myset.has("apple"));
//size()
console.log(myset.size);
//delete()
console.log(myset.delete("apple"));
console.log(myset);
//clear()
myset.clear()
console.log(myset);


let color = new Set(["red","green",
"blue"]);
// for(let color of set){
// console.log(set);  //  OP: Set(3) { 'red', 'green', 'blue' }
//                   //Set(3) { 'red', 'green', 'blue' }
//                   //Set(3) { 'red', 'green', 'blue' }
//*********** To print all element
// console.log(color);//OP:red green blue
// }
color.forEach(color =>
    console.log(color))

    //*****************************MAP()******************88 */


//1 st way to create Map()
let userMap = new Map();
userMap.set("name" ,"mayuri")
userMap.set("age" ,34)
userMap.set("city" ,"NewYork")
console.log(userMap);//Map(3) { 'name' => 'mayuri', 'age' => 34, 'city' => 'NewYork' }


//2 st way to create Map()
let userMap = new Map([
   ["fname" ,"mayuri"],
   ["age" ,34],
   ["city" ,"NewYork"]
]);
console.log(userMap);
for(let val of userMap){
   console.log(val);
}