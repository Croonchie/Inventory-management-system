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
