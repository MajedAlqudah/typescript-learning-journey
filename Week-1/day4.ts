// Array of objects
interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 }
];

// Loop through array
console.log("All Products:");
products.forEach(product => {
  console.log(`${product.name}: $${product.price}`);
});

// Find expensive products
const expensiveProducts = products.filter(product => product.price > 50);
console.log("Expensive products:", expensiveProducts);