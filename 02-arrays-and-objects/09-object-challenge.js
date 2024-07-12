const library = [
  {
    title: "The life",
    author: "John",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Good habits",
    author: "Alex",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Postive Thinking",
    author: "Jane",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

const { title: firstBook } = library[0];

console.log(firstBook);

// convert to json
const jsonStr = JSON.stringify(library);
console.log(jsonStr);
