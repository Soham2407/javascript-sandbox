let x;

const firstName = "John";
const lastName = "Doe";
const age = 32;

const person = {
  firstName: firstName,
  lastName,
  age,
};

x = person;

console.log(x);

// destructuring objects
const todo = {
  id: 1,
  title: "watching movies",
  user: {
    name: "jane doe",
  },
};

const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(todoId, title, name);

// destructuring arrays
const numbers = [10, 20, 45, 27, 90, 37];

const [first, second, , fourth, ...rest] = numbers;

console.log(first, second, fourth, rest);
