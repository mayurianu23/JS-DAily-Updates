// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function sayBye() {
//   console.log("Bye");
// }

// greet("Amit", sayBye);

function outerFunction() {
  let outerVar = "I am outer";

  function innerFunction() {
    console.log(outerVar);
  }

  innerFunction();
}

outerFunction();


const counter = (function () {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    }
  };
})();

counter.increment(); // 1
counter.increment(); // 2
//counter.decrement(); // 0

