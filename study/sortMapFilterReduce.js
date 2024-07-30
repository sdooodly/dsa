// Sort eg
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const sortNumbersAscending = (arr) => {
  return arr.sort((a, b) => a - b);
};

const sortNumbersDescending = (arr) => {
  return arr.sort((a, b) => b - a);
};

// Map eg
const names = ['Alice', 'Bob', 'Charlie', 'David'];

const greetPeople = (arr) => {
  return arr.map((name) => `Hello, ${name}!`);
};

// Filter eg
const ages = [25, 30, 18, 45, 22];

const adultsOnly = (arr) => {
  return arr.filter((age) => age >= 18);
};

// Reduce eg
const numbersForSum = [1, 2, 3, 4, 5];

const calculateSum = (arr) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

// logs
console.log(sortNumbersAscending(numbers));
console.log(sortNumbersDescending(numbers));
console.log(greetPeople(names));
console.log(adultsOnly(ages));
console.log(calculateSum(numbersForSum));
