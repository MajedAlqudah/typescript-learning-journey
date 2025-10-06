// Generic function
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

// Using generics with different types
const numbers = [1, 2, 3];
const firstNumber = getFirst(numbers);

const strings = ["apple", "banana", "cherry"];
const firstString = getFirst(strings);

console.log("First number:", firstNumber);
console.log("First string:", firstString);