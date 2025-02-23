//Task 1: Creating a Product Class


// Product Class
class Product {
    constructor(name, id, price, stock) {
      this.name = name;
      this.id = id;
      this.price = price;
      this.stock = stock;
    }
  
    // Method to return product details
    getDetails() {
      return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
  
    // Method to update stock after purchase
    updateStock(quantity) {
      if (quantity > this.stock) {
        console.log("Not enough stock available!");
      } else {
        this.stock -= quantity;
        console.log(`${quantity} item(s) sold! New stock: ${this.stock}`);
      }
    }
  }
  
  // Test Cases
  const prod1 = new Product("Laptop", 101, 1200, 10); // Creating a new product
  
  console.log(prod1.getDetails()); 
  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"
  
  prod1.updateStock(3); // Reduce stock by 3
  console.log(prod1.getDetails()); 
  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"