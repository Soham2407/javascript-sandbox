// arrow function
const sayHi = () => {
  console.log("hiii");
};

sayHi();

// arrow function with multiple parameter
const add = (a, b) => {
  return a + b;
};

console.log(add(10, 5));

// arrow function with implicit return
const substract = (a, b) => a - b;

console.log(substract(30, 5));

// arrow function with single parameter
const greet = (username) => `welcome ${username}`;

console.log(greet("virat"));
