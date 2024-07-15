// challenge 1
const getCelsius = (farenheit) => {
  const celcius = ((farenheit - 32) * 5) / 9;
  return celcius;
};

// The temperature is 0 °C
console.log(`The temperature is ${getCelsius(104)} \xB0C`);

// challenge 2
const minMax = (arr) => {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
};

// { min: 1, max: 5 }
console.log(minMax([1, 2, 3, 4, 5]));

// challenge 3
(function (length, breadth) {
  const area = length * breadth;
  console.log(
    `The area of a rectangle with a length of ${length} and a width of ${breadth} is ${area}.`
  );
})(5, 3);
