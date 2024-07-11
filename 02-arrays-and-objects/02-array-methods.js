let x;

const arr = [10, 20, 30, 40, 50];

// arr.push(60);

// arr.pop();

// arr.unshift(4);

// arr.shift();

// arr.reverse();

// console.log(arr);

x = arr.includes(40);

x = arr.indexOf(30);

x = arr.slice(1, 4);

// x = arr.splice(1, 0, 15);
// x = arr.splice(4, 1);
// x = arr;

const nestedArr = [1, [2, 3], 4, 5, [6, 7, [8, 9]], 10];
x = nestedArr.flat(); // its flat 1 level
x = nestedArr.flat(2); // its flat 2 level

x = Array.isArray(arr);

x = Array.of("abc", "xyz", "pqr");

x = Array.from("hello world");

console.log(x);
