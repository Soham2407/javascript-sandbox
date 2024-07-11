let x;

const fruits = ["apple", "mango", "banana"];
const berries = ["strawberry", "rasberry", "blueberry"];

x = fruits.concat(berries);

// spread operator [...], {...}
const merged = [...fruits, ...berries];
x = merged;

const nested = [...fruits, berries];

x = nested;

x = nested[3][1];

console.log(x);
