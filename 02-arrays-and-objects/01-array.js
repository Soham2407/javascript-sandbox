let x;

const numbers = [10, 34, 4, 57, 89];

const mixed = [4, "abc", true, null];

// console.log(numbers, mixed);

x = numbers[1];

x = numbers.length;

numbers[3] = 77;
x = numbers;

const arr = new Array("ab", "pq", "xy");
x = arr;

// getting last elements of an array
x = numbers[numbers.length - 1];

console.log(x);
