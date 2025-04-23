class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

getTotalValue() {
    return this.price * this.quantity;
  }

toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
  }
}

class PerishableProduct extends Product {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }

toString() {
    return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
  }
}

Product.applyDiscount = function (products, discount) {
  products.forEach(product => {
    product.price = product.price * (1 - discount);
  });
};

class Store {
  constructor() {
    this.inventory = [];
  }

findProductByName(name) {
    return this.inventory.find(product => product.name === name) || null;
  }
}

addProduct(product) {
    this.inventory.push(product);
  }

getInventoryValue() {
    return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
  }

const laptop = new Product("Laptop", 1200, 5);
const chair = new Product("Chair", 75, 20);
const book = new Product("Book", 15, 30);

const milk = new PerishableProduct("Milk", 3.5, 10, "2025-05-01");
const eggs = new PerishableProduct("Eggs", 2.5, 12, "2025-04-30");

const myStore = new Store();
