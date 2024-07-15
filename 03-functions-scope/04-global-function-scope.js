// global scope
let a = 10;

console.log(a);

function sayHi() {
  // function scope
  let username = "abc";
  console.log("hi " + username);

  console.log(a);
}

// console.log(username); not accessible

sayHi();
