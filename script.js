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

  static applyDiscount(products, discount) {
    products.forEach(product => {
      product.price = product.price * (1 - discount);
    });
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

class Store {
  constructor() {
    this.inventory = [];
  }

  addProduct(product) {
    this.inventory.push(product);
  }

  getInventoryValue() {
    return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
  }

  findProductByName(name) {
    return this.inventory.find(product => product.name.toLowerCase() === name.toLowerCase()) || null;
  }
}

// Initialize store and products
const myStore = new Store();

const products = [
  new Product("Laptop", 1200, 5),
  new Product("Chair", 75, 20),
  new Product("Book", 15, 30),
  new PerishableProduct("Milk", 3.5, 10, "2025-05-01"),
  new PerishableProduct("Eggs", 2.5, 12, "2025-04-30")
];

products.forEach(p => myStore.addProduct(p));

// Display before-discount value
document.getElementById("value-before").textContent = 
  `$${myStore.getInventoryValue().toFixed(2)}`;

// Apply discount
Product.applyDiscount(myStore.inventory, 0.15);

// Display after-discount value
document.getElementById("value-after").textContent = 
  `$${myStore.getInventoryValue().toFixed(2)}`;

// Display all inventory
const inventoryList = document.getElementById("inventory-list");
myStore.inventory.forEach(product => {
  const li = document.createElement("li");
  li.textContent = product.toString();
  inventoryList.appendChild(li);
});

// Find a product and show result
const searchProduct = myStore.findProductByName("Milk");
const searchResult = document.getElementById("search-result");
searchResult.textContent = searchProduct ? searchProduct.toString() : "Product not found.";
