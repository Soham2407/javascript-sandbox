// **** Primitive data types ****

// string
let firstName = "Virat";

// number
let age = 32;

// boolean
let isMarried = true;

// null
let data = null;

// undefined
let score;

// symbol
let id = Symbol("foo");

// bigint
let largeNumber = 182762355772266253663n;

// **** Refference data types ****

// array
let arr = ["abc", 10, false];

// object
let person = {
  name: "Dave",
  age: 30,
};

// function
function sayHi() {
  console.log("heyyyy");
}

const output = sayHi;
console.log(output, typeof output);
