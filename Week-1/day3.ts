class Car {
  // Properties
  brand: string;
  model: string;
  year: number;

  // Constructor
  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Method
  getInfo(): string {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}

// Using the class
const myCar = new Car("Toyota", "Camry", 2023);
console.log("My car:", myCar.getInfo());