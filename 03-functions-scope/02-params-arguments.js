// default params
function registerUser(user = "bot") {
  // old way
  // if (!user) {
  //   user = "bot";
  // }

  return user + " is registered.";
}

console.log(registerUser("john"));
console.log(registerUser());

// rest params
function sum(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 100));

// object as param
function loginUser(user) {
  return `The user ${user.name} is logged in with id ${user.id}`;
}

console.log(
  loginUser({
    id: 1,
    name: "Jane",
  })
);

// array as param
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const value = arr[randomIndex];
  console.log(value);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9]);
