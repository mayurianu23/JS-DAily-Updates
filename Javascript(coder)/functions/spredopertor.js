
// function sum(...nums) {
// let total = 0;
// for (let n of nums) {
//     total += n;
//   }
// return total;
// }
// sum(1,2,3,4);


function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

let fn = outer();
fn(); // 1
fn(); // 2
