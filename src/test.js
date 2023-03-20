const emptyArray = [];

// Example of map on empty array
const resultOfMap = emptyArray.map((element) => {
  return element * 2;
});

console.log(resultOfMap); // Output: []

// Example of forEach on empty array
emptyArray.forEach((element) => {
  console.log(element);
});