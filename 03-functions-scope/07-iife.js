// iife - avoiding global scope pollution
(function () {
  let x = 10;
  console.log("I am IIFE " + x);
})();

// console.log(x); error

(function (username) {
  console.log(`hello welcome to IIFE ${username}`);
})("Rohit");
