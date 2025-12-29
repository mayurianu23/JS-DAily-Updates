//1.Declare a vari able named challenge and assign it to an initial value '30 Days Of JavaScript'.
//=>
    //let challenge = '30 Days Of JavaScript';

//Change all the string characters to capital letters using toUpperCase() method
let str = "mayuri Yogesh tarle";
//console.log(str.toUpperCase());
console.log(str.toLowerCase());


//Cut (slice) out the first word of the string using substr() or substring() method
let string = "good morinig";
let op = string.substring(0,5);
console.log(op);

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let js = " 30 Days Of JavaScript";
let res = js.slice(3);
console.log(res);
//

//Check if the string contains a word Script using includes() method
let char = "javascript";
let output = char.includes('script');
console.log(output);


//Split the string into an array using split() method
let strr = "mayuri yogesh tarle";
let splitStr = strr.split(" ");
console.log(splitStr);

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon
//split the string at the comma and change it to an array.
let onestr = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(onestr.split(" "));


//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method
let a = "30 Days Of JavaScript";
console.log(a.replace('JavaScript','Python'));


//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let c = "30 Days Of JavaScript";
console.log(c.charAt(15));


//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let g  = "30 Days Of JavaScript";
console.log(g.charCodeAt(13));


//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let J  = "30 Days Of Javascript";
console.log(J.indexOf('s')) 

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let i  = "You cannot end a sentence with because because because is a conjunction";
console.log(i.lastIndexOf('because')) 

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let o  = "You cannot end a sentence with because because because is a conjunction";
console.log(o.search('because')) 

// use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '
let Str = " hello javascrip ";
console.log(Str.trim(""));

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let strtwith = "hello javascript";
//console.log(strtwith.startsWith('hello'));
console.log(strtwith.endsWith('javascript'));

//Use match() method to find all the a’s in 30 Days Of JavaScript
let match = " i software devloper";
console.log(match.match("a"));


//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let concat = "30 Days of";
console.log(concat.concat("JavaScript"));


//Use repeat() method to print 30 Days Of JavaScript 2 times
let rep = "30 Days of";
console.log(rep.repeat(3));