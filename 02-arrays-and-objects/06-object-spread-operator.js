let x;

const todo = new Object();

todo.id = 1;
todo.title = "playing cricket";
todo.isCompleted = false;

console.log(todo);

const person = {
  address: {
    cords: {
      lat: 42.765,
      lng: -65.875,
    },
  },
};

x = person.address.cords.lat;

// spread operator
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
x = obj3;

// Object assign
const obj4 = Object.assign({}, obj1, obj2);
x = obj4;

const todos = [
  { id: 1, title: "playing cricket", isComplete: true },
  { id: 2, title: "watching movie", isComplete: false },
  { id: 3, title: "listening music", isComplete: true },
];

x = todos;
x = todos[1].title;

// object keys
x = Object.keys(todo);

// object values
x = Object.values(todo);

// object entries
x = Object.entries(todo);

x = todo.hasOwnProperty("title");
x = todo.hasOwnProperty("age");

console.log(x);
