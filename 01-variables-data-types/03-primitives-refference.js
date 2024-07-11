// primitives are stored on the stack
let username = "abc";

let anotherName = username;

anotherName = "John";

console.log(username, anotherName);

// refferences are stored on the heap
let person = {
  name: "Dave",
  age: 20,
};

let anotherPerson = person;

anotherPerson.name = "peter";

console.log(person, anotherPerson);
