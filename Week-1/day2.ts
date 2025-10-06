// Object type
interface Person {
  name: string;
  age: number;
  email?: string; // Optional
}

// Function with object parameter
function createPerson(name: string, age: number): Person {
  return { name, age };
}

// Using interface
const person1: Person = {
  name: "Alice",
  age: 30,
  email: "alice@test.com"
};

const person2 = createPerson("Bob", 25);

console.log("Person 1:", person1);
console.log("Person 2:", person2);