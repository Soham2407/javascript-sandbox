let x;

const name = "virat";
const age = 35;

x = "Hello, My name is " + name + ". I am " + age + " years old.";

x = `Hello, My name is ${name}. I am ${age} years old.`;

const str = "Hello world";

// length
x = str.length;

// accessing string by index
x = str[0];
x = str[3];

// uppercase & lowercase
x = str.toLowerCase();
x = str.toUpperCase();

// charAt
x = str.charAt(1);
x = str.charAt(7);

// indexOf
x = str.indexOf("l");
x = str.indexOf("w");

// substring
x = str.substring(0, 5);

// slice
x = str.slice(6, 11);

// trim
const spaces = "    good boy     ";
x = spaces.trim();

// includes
x = str.includes("ell");

// split
x = str.split(" ");

console.log(x);
