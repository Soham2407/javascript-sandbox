const a = 10;

console.log(a);

if (true) {
  // block scope
  const b = 20;

  console.log(b);
  console.log(a);
}

// console.log(b); error not accessible
