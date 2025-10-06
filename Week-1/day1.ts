// Basic types
let name: string = "John";
let age: number = 25;
let isStudent: boolean = true;

// Array
let colors: string[] = ["red", "green", "blue"];

// Function
function greet(person: string): string {
  return `Hello, ${person}!`;
}

// Using the types
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Colors:", colors);
console.log("Greeting:", greet("Alice"));