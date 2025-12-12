/*it is a built-in object that lets you store unique values (no duplicates allowed).
Think of a Set like a special array that automatically removes duplicates. 
A Set is a collection of values where:
   Every value is unique
   Order is preserved (insertion order)
   You can store any type — number, string, object, etc*/


//    let number = new Set([1,2,3,4,5,1,1,1])
//    console.log(number);//Set(5) {1,2,3,4,5}

//To add values in emptySet
let myset = new Set();
myset.add("apple")
myset.add("banana")
myset.add("cherry")
//has()
console.log(myset.has("apple"));
//size()
console.log(myset.size);
//delete(0)
console.log(myset.delete("apple"));
console.log(myset);
//clear()
myset.clear()
console.log(myset);


