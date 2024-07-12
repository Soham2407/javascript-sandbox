let x;

const person = {
  name: "John Doe",
  age: 20,
  isMarried: false,
  hobbies: ["sports", "music"],
};

x = person;

x = person.age;
x = person["name"];

person.name = "Jane Doe";

person.city = "New york";

delete person.age;

person.greet = function () {
  console.log("hello");
};

x = person;

person.greet();

x = person.hobbies[0];

console.log(x);
